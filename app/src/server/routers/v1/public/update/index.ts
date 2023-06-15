import { Router } from "express";
import { confirmCodeController } from "../../../../../application/heart/User/confirmCode";
import { Joi, validate } from "express-validation";

const router = Router();

router.put(
  "/confirm-code/:keyuser/:code",
  validate({
    params: Joi.object({
      code: Joi.string().regex(/^\d+$/).length(5).required(),
      keyuser: Joi.string().required(),
    }),
  }),
  confirmCodeController
);

export { router as RouterUpdate };
