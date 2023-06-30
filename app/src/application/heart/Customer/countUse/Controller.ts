import { Request, Response } from "express";
import { CountCustomerOfUserDTO_I } from "./DTO";
import { CountCustomerOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountCustomerOfUserController = (
  countCustomerOfUserUseCase: CountCustomerOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, { userId: number }, CountCustomerOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countCustomerOfUserUseCase.run({
        ...req.body,
        ...req.query,
      });
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
