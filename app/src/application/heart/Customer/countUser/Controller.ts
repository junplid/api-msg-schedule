import { Request, Response } from "express";
import { CountCustomerUserDTO_I } from "./DTO";
import { CountCustomerUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountCustomerUserController = (
  countCustomerUserUseCase: CountCustomerUserUseCase
) => {
  const execute = async (
    req: Request<any, any, CountCustomerUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countCustomerUserUseCase.run(req.body);
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
