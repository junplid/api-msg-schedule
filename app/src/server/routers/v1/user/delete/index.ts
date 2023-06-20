import { Router } from "express";
import { Joi, validate } from "express-validation";
import { dellMessageOfUserController } from "../../../../../application/heart/Message/delete";
import { dellProductOfUserController } from "../../../../../application/heart/Product/delete";
import { dellPlanOfProductController } from "../../../../../application/heart/Product/deletePlan";
import { dellCustomerOfUserController } from "../../../../../application/heart/Customer/delete";
import { removeMessageOfCustomerController } from "../../../../../application/heart/Customer/removeMessageOfCustomer";

const router = Router();

router.delete(
  "/message/:id",
  validate({
    params: Joi.object({
      id: Joi.string().required(),
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
  dellMessageOfUserController
);

router.delete(
  "/product/:id",
  validate({
    params: Joi.object({
      id: Joi.string().required(),
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
  dellProductOfUserController
);

router.delete(
  "/plan/:id",
  validate({
    params: Joi.object({
      id: Joi.string().required(),
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
  dellPlanOfProductController
);

router.delete(
  "/customer/:id",
  validate({
    params: Joi.object({
      id: Joi.string().required(),
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
  dellCustomerOfUserController
);

router.delete(
  "/message-customer/:id/:messageId",
  validate({
    params: Joi.object({
      id: Joi.string().required(),
      messageId: Joi.string().required(),
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
  removeMessageOfCustomerController
);

export { router as RouterDelete };
