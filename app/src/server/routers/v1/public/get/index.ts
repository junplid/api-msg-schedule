import { Router } from "express";
import { VerifyTokenMiddleware } from "../../../../../middleware/Auth/verifyToken";

const router = Router();

router.get("/verify-token/:token", VerifyTokenMiddleware);

export { router as RouterGet };
