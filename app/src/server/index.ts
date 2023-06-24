import { config } from "dotenv";
import { App } from "./app";
import { create } from "venom-bot";
import { ValidationError } from "express-validation";
import http from "http";
import { Server } from "socket.io";
import { storeSessions } from "../sessionsStore";
import { PrismaClient } from "@prisma/client";
import { CronJob } from "cron";

config();

App.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err.details);
  }

  return res.status(500).json(err);
});

const server = http.createServer(App);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
  },
});

server.listen(process.env.NODE_DOCKER_PORT ?? 8080, () =>
  console.log(`Servidor rodando na porta: 3001`)
);

const createSession = async (key: string) => {
  const data = await new PrismaClient().users.findUnique({
    where: { id: Number(key) },
    select: { due_date: true, type: true },
  });

  if (!data || !data.due_date) {
    throw new Error("Dados não encontrado");
  }

  if (data.type !== "root" && new Date(data?.due_date) < new Date()) {
    throw new Error("Licença expirada!");
  }

  const client = await create({
    session: key,
    logQR: false,
    disableWelcome: true,
    debug: false,
    catchQR: (qrCode) => {
      io.to(key).emit(key, qrCode);
    },
  }).then(async (client) => {
    new CronJob(
      "0 0 10 * * *",
      async function () {
        const customer = await new PrismaClient().customers.findMany({
          where: {
            userId: Number(key),
            user: {
              due_date: { gt: new Date() },
            },
          },
          select: {
            dueDate: true,
            full_name: true,
            invoice: true,
            login: true,
            id: true,
            comments: true,
            plan: { select: { name: true } },
            product: { select: { name: true } },
            message: {
              include: {
                message: true,
              },
            },
            password: true,
            whatsapp: true,
          },
        });
        const dataDeNotificacao = new Date();

        customer?.forEach((cust) => {
          cust?.message?.forEach((msg) => {
            dataDeNotificacao.setDate(
              dataDeNotificacao.getDate() - msg.message.days
            );

            if (new Date(cust.dueDate) < dataDeNotificacao) {
              client.sendText(
                `55${cust.whatsapp}@c.us`,
                `${msg.message.text
                  .replace(/\{NOME\}/, cust.full_name)
                  .replace(/\{PRIMEIRO_NOME\}/, cust.full_name.split(" ")[0])
                  .replace(/\{ZAP\}/, cust.whatsapp)
                  .replace(/\{LOGIN\}/, cust.login)
                  .replace(/\{SENHA\}/, cust.password)
                  .replace(/\{PLANO\}/, cust.plan.name)
                  .replace(/\{PRODUTO\}/, cust.product.name)
                  .replace(/\{OBS\}/, cust.comments)
                  .replace(
                    /\{DATA_VENCI\}/,
                    new Date(cust.dueDate).toLocaleDateString("pt-br")
                  )}`
              );
            }
          });
        });
      },
      null,
      false,
      "America/Los_Angeles"
    ).start();
    return client;
  });
  Object.assign(storeSessions, { [key]: client });
};

io.on("connection", async (socket) => {
  socket.on("create-session", async (data) => {
    try {
      socket.join(data.key);
      await createSession(data.key);
      socket.emit("sucess-connetion", true);
    } catch (error) {
      console.log(error);
      socket.leave(data.key);
      socket.emit("leave", data.key);
    }
  });
});

new CronJob(
  "0 0 8 * * *",
  async function () {
    try {
      const prisma = new PrismaClient();
      const userRoot = await prisma.users.findFirst({
        where: { type: "root" },
        select: { id: true },
      });

      const users = await prisma.users.findMany({
        where: {
          due_date: { lte: new Date() },
          NOT: {
            type: "root",
          },
        },
        select: { id: true, whatsapp: true, full_name: true },
      });

      await Promise.all(
        users?.map(async (user) => {
          try {
            await storeSessions[userRoot?.id!]?.sendText(
              `55${user.whatsapp}@c.us`,
              `**${user.full_name}**, informamos que a sua licença para utilizar o sistema expirou, resultando na interrupção dos serviços do seu bot. Para continuar utilizando nossos serviços, renove a sua licença por mais 31 dias!`
            );
            return;
          } catch (error) {
            return;
          }
        })
      );
    } catch (error) {
      console.log(error);
    }
  },
  null,
  false,
  "America/Los_Angeles"
).start();
