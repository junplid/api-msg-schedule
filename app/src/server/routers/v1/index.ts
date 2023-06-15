import { Router } from "express";
import { RouterPublic } from "./public";
import { RouterUser } from "./user";
import { verifyTokenAcessGlobal } from "../../../middleware/Auth/VerifyTokenGlobal";

const router = Router();

router.use("/public", RouterPublic);
router.use("/user", verifyTokenAcessGlobal("USER").execute, RouterUser);

export { router };
