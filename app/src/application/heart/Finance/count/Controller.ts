import { Request, Response } from "express";
import { CountFinanceOfUserDTO_I } from "./DTO";
import { CountFinanceOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountFinanceOfUserController = (
  countFinanceOfUserUseCase: CountFinanceOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, { userId: number }, CountFinanceOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countFinanceOfUserUseCase.run({
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
