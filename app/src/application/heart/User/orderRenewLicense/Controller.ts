import { Request, Response } from "express";
import { OrderRenewLicenseDTO_I } from "./DTO";
import { OrderRenewLicenseUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const OrderRenewLicenseController = (
  orderRenewLicenseUseCase: OrderRenewLicenseUseCase
) => {
  const execute = async (
    req: Request<any, any, OrderRenewLicenseDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await orderRenewLicenseUseCase.run(req.body);
      console.log("AQUI");
      return res.status(201).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 500).json(error.details ?? error);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
