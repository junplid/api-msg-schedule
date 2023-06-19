import { Router } from "express";
import { createMessageController } from "../../../../../application/heart/Message/create";
import { Joi, validate } from "express-validation";
import { createProductController } from "../../../../../application/heart/Product/create";

const router = Router();

router.post(
  "/message",
  validate({
    body: Joi.object({
      text: Joi.string().required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
      }),
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
      days: Joi.number().min(0).required().messages({
        "any.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.min": "Este campo precisar ser maior ou igual a 0",
      }),
    }),
  }),
  createMessageController
);

router.post(
  "/product-service",
  validate({
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
      name: Joi.string().required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "Este campo precisa ser uma string",
      }),
      price: Joi.number().min(0).required().messages({
        "any.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.min": "Este campo precisar ser maior ou igual a 0",
      }),
      plans: Joi.array().items(
        Joi.object({
          name: Joi.string().required().messages({
            "string.empty": "Campo obrigatório",
            "any.required": "Campo obrigatório",
            "string.base": "Este campo precisa ser uma string",
          }),
          price: Joi.number().min(0).required().messages({
            "any.empty": "Campo obrigatório",
            "any.required": "Campo obrigatório",
            "number.min": "Este campo precisar ser maior ou igual a 0",
          }),
        })
      ),
    }),
  }),
  createProductController
);

export { router as RouterCreate };
