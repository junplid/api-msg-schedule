import { Router } from "express";
import { RouterPublic } from "./public";

const router = Router();

router.use("/public", RouterPublic);

export { router };
