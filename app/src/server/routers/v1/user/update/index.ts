import { Router } from "express";
import { Joi, validate } from "express-validation";
import { changeFieldsUserController } from "../../../../../application/heart/User/changeFields";

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

export { router as RouterUpdate };
