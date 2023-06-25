import { Router } from "express";
import { createMessageController } from "../../../../../application/heart/Message/create";
import { Joi, validate } from "express-validation";
import { createProductController } from "../../../../../application/heart/Product/create";
import { createCustomerController } from "../../../../../application/heart/Customer/create";
import { sendMessageCustomerController } from "../../../../../application/heart/Customer/sendMessage";
import { orderRenewLicenseController } from "../../../../../application/heart/User/orderRenewLicense";
import { renewLicenseController } from "../../../../../application/heart/User/renewLicense";

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

// marcou como pago então salva na tebela de financeiro os pagamentos
// os pendentes
// o valor
// e etc.

// liga o cliente

// enviar menssagem para o cliente
router.post(
  "/send-message",
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
      id: Joi.number().min(0).required().messages({
        "any.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.min": "Este campo precisar ser maior ou igual a 0",
      }),
    }),
  }),
  sendMessageCustomerController
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

router.post(
  "/customer",
  validate({
    body: Joi.object({
      userId: Joi.number().min(0).required().messages({
        "number.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "number.base": "Este campo precisa ser do tipo número",
        "number.min": "Precisa ter no mínimo 0",
      }),
      full_name: Joi.string().required().messages({
        "string.empty": "Campo obrigatório",
        "any.required": "Campo obrigatório",
        "string.base": "O campo precisa ser uma string",
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
      login: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      password: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      invoice: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      dueDate: Joi.date().messages({
        "any.base": "Este campo precisa ser uma string",
      }),
      comments: Joi.string().messages({
        "string.base": "Este campo precisa ser uma string",
      }),
      planId: Joi.number().min(0).messages({
        "number.min": "Este campo precisar ser maior ou igual a 0",
      }),
      productId: Joi.number().min(0).messages({
        "number.min": "Este campo precisar ser maior ou igual a 0",
      }),
      messageId: Joi.array().items(
        Joi.number().min(0).messages({
          "any.empty": "Campo obrigatório",
          "any.required": "Campo obrigatório",
          "number.min": "Este campo precisar ser maior ou igual a 0",
        })
      ),
    }),
  }),
  createCustomerController
);

router.post(
  "/order-renew-license",
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
  orderRenewLicenseController
);

export { router as RouterCreate };
