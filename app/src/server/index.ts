import { config } from "dotenv";
import { App } from "./app";
import { startVenomBot } from "../adapters/VenomBot/start";
import { PrismaClient } from "@prisma/client";
import { Whatsapp } from "venom-bot";
import { ValidationError } from "express-validation";
import { RunUseCase_I } from "../types/global";

config();

// const client = startVenomBot()
//   .then(async (cl) => {
//     try {

//       return cl;
//     } catch (error) {
//       console.log("ERROR", error);
//       return;
//     }
//   })
//   .catch(() => {
//     throw new Error("Error");
//   }) as Promise<Whatsapp>;

App.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err.details);
  }

  return res.status(500).json(err);
});

App.listen(process.env.NODE_DOCKER_PORT ?? 8080, () =>
  console.log(`Servidor rodando na porta: 6868`)
);
