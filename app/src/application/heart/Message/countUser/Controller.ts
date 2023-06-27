import { Request, Response } from "express";
import { CountMessageUserDTO_I } from "./DTO";
import { CountMessageUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountMessageUserController = (
  countMessageUserUseCase: CountMessageUserUseCase
) => {
  const execute = async (
    req: Request<any, any, CountMessageUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countMessageUserUseCase.run(req.body);
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
