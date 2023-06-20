import { Router } from "express";
import { Joi, validate } from "express-validation";
import { changeFieldsUserController } from "../../../../../application/heart/User/changeFields";
import { changeFieldsMessageController } from "../../../../../application/heart/Message/changeFields";
import { changeFieldsProductController } from "../../../../../application/heart/Product/changeFields";
import { changeFieldsPlanProductController } from "../../../../../application/heart/Product/changeFieldsPlan";
import { changeCustomerFieldsController } from "../../../../../application/heart/Customer/changeFields";

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
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
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
      id: Joi.string().regex(/^\d+$/).required().messages({
        "string.pattern.base": "Insira somente números para o id da mensagem",
      }),
    }),
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  changeFieldsMessageController
);

router.put(
  "/change-field-product/:id",
  validate({
    query: Joi.object({
      name: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      price: Joi.number(),
    }),
    params: Joi.object({
      id: Joi.string().regex(/^\d+$/).required().messages({
        "string.pattern.base": "Insira somente números para o id da mensagem",
      }),
    }),
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  changeFieldsProductController
);

router.put(
  "/change-field-plan-product/:id",
  validate({
    query: Joi.object({
      name: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      price: Joi.number(),
    }),
    params: Joi.object({
      id: Joi.string().regex(/^\d+$/).required().messages({
        "string.pattern.base": "Insira somente números para o id da mensagem",
      }),
    }),
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  changeFieldsPlanProductController
);

router.put(
  "/change-field-customer/:id",
  validate({
    query: Joi.object({
      full_name: Joi.string(),
      whatsapp: Joi.string(),
      login: Joi.string(),
      password: Joi.string(),
      invoice: Joi.string(),
      dueDate: Joi.date(),
      comments: Joi.string(),
      planId: Joi.string(),
      productId: Joi.string(),
    }),
    params: Joi.object({
      id: Joi.string().regex(/^\d+$/).required().messages({
        "string.pattern.base": "Insira somente números para o id da mensagem",
      }),
    }),
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  changeCustomerFieldsController
);

export { router as RouterUpdate };
