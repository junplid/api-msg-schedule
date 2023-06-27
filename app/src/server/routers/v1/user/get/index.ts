import { Router } from "express";
import { listMessageOfUserController } from "../../../../../application/heart/Message/listOfUser";
import { Joi, validate } from "express-validation";
import { listProductOfUserController } from "../../../../../application/heart/Product/listOfUser";
import { listCustomerOfUserController } from "../../../../../application/heart/Customer/listOfUser";
import { listPlansOfPdrController } from "../../../../../application/heart/Product/listPlansOfPdr";
import { listOnlyProductOfUserController } from "../../../../../application/heart/Product/listOnlyPdrUser";
import { getStateSessionWhatsappController } from "../../../../../application/heart/User/getStateSessionWhatsapp";
import { infoUserController } from "../../../../../application/heart/User/info";
import { countCustomerController } from "../../../../../application/heart/Customer/countRoot";
import { countMessageController } from "../../../../../application/heart/Message/countRoot";
import { countPlansController } from "../../../../../application/heart/Product/countPlRoot";
import { countProductsController } from "../../../../../application/heart/Product/countPdrRoot";
import { countSubscribersRootController } from "../../../../../application/heart/User/countTotalRoot";
import { countCustomerUserController } from "../../../../../application/heart/Customer/countUser";
import { countMessageUserController } from "../../../../../application/heart/Message/countUser";
import { customerStatisticsRootController } from "../../../../../application/heart/Customer/CustomerStatisticsRoot";
import { customerStatisticsUserController } from "../../../../../application/heart/Customer/CustomerStatisticsUser";
import { statisticController } from "../../../../../application/heart/User/Statistic";
import { countProductsUserController } from "../../../../../application/heart/Product/countPdrUser";
import { countPlansUserController } from "../../../../../application/heart/Product/countPlUSer";

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
  "/info",
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
  "/info-user",
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
  infoUserController
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

router.get(
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

router.get(
  "/only-products",
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
  listOnlyProductOfUserController
);

router.get(
  "/state-session-whatsapp",
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
  getStateSessionWhatsappController
);

router.get(
  "/count-customers-root",
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
  countCustomerController
);

router.get(
  "/count-messages-root",
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
  countMessageController
);

router.get(
  "/count-plans-root",
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
  countPlansController
);

router.get(
  "/count-products-root",
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
  countProductsController
);

router.get(
  "/count-products-user",
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
  countProductsUserController
);

router.get(
  "/count-plans-user",
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
  countPlansUserController
);

router.get(
  "/count-subcribers-root",
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
  countSubscribersRootController
);

router.get(
  "/count-customers-user",
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
  countCustomerUserController
);

router.get(
  "/count-messages-user",
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
  countMessageUserController
);

router.get(
  "/statistics-count-customers-root",
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
  customerStatisticsRootController
);

router.get(
  "/statistics-count-customers-user",
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
  customerStatisticsUserController
);

router.get(
  "/statistics-count-subscribers-root",
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
  statisticController
);

export { router as RouterGet };
