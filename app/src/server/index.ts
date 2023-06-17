import { config } from "dotenv";
import { App } from "./app";
import { Whatsapp, create } from "venom-bot";
import { ValidationError } from "express-validation";
import http from "http";
import { Server, Socket } from "socket.io";
import { imageSync } from "qr-image";
import { writeFileSync } from "fs";
import { dirname, resolve } from "path";
import { storeSessions } from "../sessionsStore";

config();

// create({
//   session: "rian",
//   disableWelcome: true,
// })
//   .then(async (client) => {
//     console.log("1");
//     await client
//       .sendText("5571986751101@c.us", "A plataforma iniciou!")
//       .then()
//       .catch((erro) => {
//         console.error("Error when sending: ", erro); //return object error
//       });
//     client.onMessage(async (message) => {
//       console.log("2");
//       if (message.body === "Hi" && message.isGroupMsg === false) {
//         console.log("3");
//         await client
//           .sendText(message.from, "Welcome Venom 🕷")
//           .then((result) => {
//             console.log("Result: ", result); //return object success
//           })
//           .catch((erro) => {
//             console.error("Error when sending: ", erro); //return object error
//           });
//       }
//     });
//   })
//   .catch((err) => console.log(err));

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
  const client = await create({
    session: key,
    logQR: false,
    disableWelcome: true,
    catchQR: (qrCode) => {
      io.to(key).emit(key, qrCode);
    },
  }).then((client) => {
    client.onMessage(async (message) => {
      if (message.body === "Hi" && message.isGroupMsg === false) {
        await client
          .sendText(message.from, `"Welcome Venom 🕷"`)
          .then((result) => {
            console.log("Result: ", result); //return object success
          })
          .catch((erro) => {
            console.error("Error when sending: ", erro); //return object error
          });
      }
    });
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
      socket.leave(data.key);
      socket.emit("leave", data.key);
    }
  });
});
