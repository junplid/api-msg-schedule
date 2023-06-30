import { Request, Response } from "express";
import { GetBalanceOfUserDTO_I } from "./DTO";
import { GetBalanceOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const GetBalanceOfUserController = (
  getBalanceOfUserUseCase: GetBalanceOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, GetBalanceOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await getBalanceOfUserUseCase.run({
        ...req.params,
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
