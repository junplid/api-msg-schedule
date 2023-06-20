import { Router } from "express";
import { listMessageOfUserController } from "../../../../../application/heart/Message/listOfUser";
import { Joi, validate } from "express-validation";
import { listProductOfUserController } from "../../../../../application/heart/Product/listOfUser";
import { listCustomerOfUserController } from "../../../../../application/heart/Customer/listOfUser";
import { listPlansOfPdrController } from "../../../../../application/heart/Product/listPlansOfPdr";

const router = Router();

router.get(
  "/messages",
  validate({
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  listMessageOfUserController
);

router.get(
  "/products",
  validate({
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  listProductOfUserController
);

router.get(
  "/customers",
  validate({
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
    }),
  }),
  listCustomerOfUserController
);

router.put(
  "/plans-of-product/:id",
  validate({
    params: Joi.object({
      id: Joi.string().regex(/^\d+$/).required().messages({
        "string.pattern.base": "Insira somente números para o productId",
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
  listPlansOfPdrController
);

export { router as RouterGet };
