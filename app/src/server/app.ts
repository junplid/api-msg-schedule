import express from "express";
import cors from "cors";
import { router } from "./routers/v1";

const app = express();

app.use(express.json());
app.use(cors({ origin: "*", credentials: true }));

app.use("/v1", router);

export { app as App };
