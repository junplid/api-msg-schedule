import { Router } from "express";
import { resendCodeController } from "../../../../../application/heart/User/resendCode";
import { Joi, validate } from "express-validation";

const router = Router();

router.get(
  "/resend-code/:keyuser",
  validate({
    params: Joi.object({
      keyuser: Joi.string().required(),
    }),
  }),
  resendCodeController
);

export { router as RouterGet };
