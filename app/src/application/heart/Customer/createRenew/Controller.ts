import { Request, Response } from "express";
import { RenewCustomerDTO_I } from "./DTO";
import { RenewCustomerUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const RenewCustomerController = (
  renewCustomerUseCase: RenewCustomerUseCase
) => {
  const execute = async (
    req: Request<any, any, RenewCustomerDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      console.log(req.body);
      const data = await renewCustomerUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      console.log(error);
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 500).json(error.details ?? error);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
