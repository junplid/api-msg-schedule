import { Router } from "express";
import { Joi, validate } from "express-validation";
import { createUserController } from "../../../../../application/heart/User/create";
import { loginController } from "../../../../../application/heart/User/login";

const router = Router();

router.post(
  "/register-user",
  validate({
    body: Joi.object({
      full_name: Joi.string()
        .min(6)
        .max(200)
        .regex(/^\D+$/)
        .required()
        .messages({
          "string.empty": "Campo obrigatório",
          "string.min": "Insira seu nome completo",
          "any.required": "Campo obrigatório",
          "string.max": "Este campo precisa ter no máximo 200 caracteres",
          "string.base": "Este campo precisa ser uma string",
          "string.regex": "Não insira número(s) aqui",
        }),
      email: Joi.string().email().max(200).required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
        "string.email": "Insira um e-mail valido",
        "string.max": "O e-mail precisa ter no máximo 200 caracteres",
      }),
      whatsapp: Joi.string()
        .regex(/^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/)
        .required()
        .messages({
          "string.empty": "Campo obrigatório",
          "any.required": "Campo obrigatório",
          "string.base": "Este campo precisa ser uma string",
          "string.pattern.base": "Insira um whatsapp valido",
        }),
      password: Joi.string().min(6).required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
        "string.min": "A senha precisa ter pelomenos 6 caracteres",
      }),
    }),
  }),
  createUserController
);

router.post(
  "/login",
  [],
  validate({
    body: Joi.object({
      email: Joi.string().email().max(200).required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.max": "O e-mail precisa ter no máximo 200 caracteres",
        "string.base": "Este campo precisa se uma string",
        "string.email": "Insira um e-mail valido",
      }),
      password: Joi.string().min(6).required().messages({
        "any.required": "Campo obrigatório",
        "string.empty": "Campo obrigatório",
        "string.min": "A senha precisa ter pelomenos 6 caracteres",
        "string.base": "A senha precisa se uma string",
      }),
    }),
  }),
  loginController
);

export { router as RouterCreate };
