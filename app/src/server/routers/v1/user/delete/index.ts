import { Router } from "express";
import { Joi, validate } from "express-validation";
import { dellMessageOfUserController } from "../../../../../application/heart/Message/delete";

const router = Router();

router.delete(
  "/message/:id",
  validate({
    params: Joi.object({
      id: Joi.string().required(),
    }),
    body: Joi.object({
      user_key: Joi.string().max(55).required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
        "string.max": "O e-mail precisa ter no máximo 55 caracteres",
      }),
    }),
  }),
  dellMessageOfUserController
);

export { router as RouterDelete };
