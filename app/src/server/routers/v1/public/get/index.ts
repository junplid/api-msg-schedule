import express, { Router } from "express";
import { VerifyTokenMiddleware } from "../../../../../middleware/Auth/verifyToken";
import { storeSessions } from "../../../../../sessionsStore";
import { resolve } from "path";

const router = Router();

router.use(
  "/qrcode-image",
  express.static(resolve(__dirname, "../../../../../../qrcodes"))
);

router.get("/verify-token/:token", VerifyTokenMiddleware);
router.get("/teste1/:id/:number/:message", async (req, res) => {
  try {
    await storeSessions[req.params.id].sendText(
      `${req.params.number}@c.us`,
      req.params.message
    );
    return res.status(200).json(req.params);
  } catch (error) {
    return res.status(400).json({});
  }
});

export { router as RouterGet };
