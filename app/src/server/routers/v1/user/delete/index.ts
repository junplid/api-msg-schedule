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

export { router as RouterDelete };
