import { config } from "dotenv";
import { App } from "./app";
import { startVenomBot } from "../adapters/VenomBot/start";
import { PrismaClient } from "@prisma/client";
import { Whatsapp } from "venom-bot";

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

new PrismaClient().$connect();
App.listen(process.env.NODE_DOCKER_PORT ?? 8080, () =>
  console.log(`Servidor rodando na porta: 6868`)
);
