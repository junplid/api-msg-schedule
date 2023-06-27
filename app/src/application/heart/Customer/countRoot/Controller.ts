import { Request, Response } from "express";
import { CountCustomerDTO_I } from "./DTO";
import { CountCustomerUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountCustomerController = (
  countCustomerUseCase: CountCustomerUseCase
) => {
  const execute = async (
    req: Request<any, any, CountCustomerDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countCustomerUseCase.run(req.body);
      return res.status(200).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 500).json(error.details ?? error);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
