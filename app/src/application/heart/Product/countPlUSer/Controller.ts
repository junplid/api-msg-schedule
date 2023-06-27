import { Request, Response } from "express";
import { CountPlansUserDTO_I } from "./DTO";
import { CountPlansUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountPlansUserController = (
  countPlansUserUseCase: CountPlansUserUseCase
) => {
  const execute = async (
    req: Request<any, any, CountPlansUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countPlansUserUseCase.run(req.body);
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
