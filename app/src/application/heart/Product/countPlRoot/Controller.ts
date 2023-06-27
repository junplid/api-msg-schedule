import { Request, Response } from "express";
import { CountPlansDTO_I } from "./DTO";
import { CountPlansUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountPlansController = (countPlansUseCase: CountPlansUseCase) => {
  const execute = async (
    req: Request<any, any, CountPlansDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countPlansUseCase.run(req.body);
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
