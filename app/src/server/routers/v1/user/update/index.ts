import { Router } from "express";
import { Joi, validate } from "express-validation";
import { changeFieldsUserController } from "../../../../../application/heart/User/changeFields";
import { changeFieldsMessageController } from "../../../../../application/heart/Message/changeFields";

const router = Router();

router.put(
  "/change-field",
  validate({
    query: Joi.object({
      full_name: Joi.string().max(200).regex(/^\D+$/),
      whatsapp: Joi.string().regex(
        /^[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$/
      ),
      password: Joi.string().min(6),
    }),
  }),
  changeFieldsUserController
);

router.put(
  "/change-field-message/:id",
  validate({
    query: Joi.object({
      text: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      days: Joi.string().regex(/^\d+$/).messages({
        "string.pattern.base": "Insira somente números no campo dia",
      }),
    }),
    params: Joi.object({
      params: Joi.object({
        id: Joi.string().regex(/^\d+$/).required().messages({
          "string.pattern.base": "Insira somente números para o id da mensagem",
        }),
      }),
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
  changeFieldsMessageController
);

export { router as RouterUpdate };
