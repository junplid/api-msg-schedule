import { Router } from "express";
import { Joi, validate } from "express-validation";
import { dellMessageOfUserController } from "../../../../../application/heart/Message/delete";
import { dellProductOfUserController } from "../../../../../application/heart/Product/delete";
import { dellPlanOfProductController } from "../../../../../application/heart/Product/deletePlan";

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

export { router as RouterDelete };
