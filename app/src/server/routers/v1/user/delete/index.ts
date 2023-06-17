import { Router } from "express";
import { createMessageController } from "../../../../../application/heart/Message/create";
import { Joi, validate } from "express-validation";

const router = Router();

router.delete(
  "/message",
  validate({
    body: Joi.object({
      id: Joi.number().min(0).required().messages({
        "any.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.min": "Este campo precisar ser maior ou igual a 0",
      }),
    }),
  }),
  createMessageController
);

export { router as RouterDelete };
