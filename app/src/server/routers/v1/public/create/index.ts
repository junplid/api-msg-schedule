import { Router } from "express";
import { Joi, validate } from "express-validation";
import { createUserController } from "../../../../../application/heart/User/create";

const router = Router();

router.post(
  "/register-user",
  validate({
    body: Joi.object({
      full_name: Joi.string().max(200).regex(/^\D+$/).required(),
      whatsapp: Joi.string()
        .regex(/^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/)
        .required(),
      email: Joi.string().email().max(200).required(),
      password: Joi.string().min(6).required(),
      birth_date: Joi.date().required(),
    }),
  }),
  createUserController
);

export { router as RouterCreate };
