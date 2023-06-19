import { Router } from "express";
import { listMessageOfUserController } from "../../../../../application/heart/Message/listOfUser";
import { Joi, validate } from "express-validation";
import { listProductOfUserController } from "../../../../../application/heart/Product/listOfUser";

const router = Router();

router.get(
  "/messages",
  validate({
    body: Joi.object({
      user_key: Joi.string().max(55).required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
        "string.max": "Chave usúario precisa ter no máximo 55 caracteres",
      }),
    }),
  }),
  listMessageOfUserController
);

router.get(
  "/products",
  validate({
    body: Joi.object({
      user_key: Joi.string().max(55).required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
        "string.max": "Chave usúario precisa ter no máximo 55 caracteres",
      }),
    }),
  }),
  listProductOfUserController
);

export { router as RouterGet };
