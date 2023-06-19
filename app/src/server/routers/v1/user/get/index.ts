import { Router } from "express";
import { listMessageOfUserController } from "../../../../../application/heart/Message/listOfUser";
import { Joi, validate } from "express-validation";
import { listProductOfUserController } from "../../../../../application/heart/Product/listOfUser";

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

export { router as RouterGet };
