import { Request, Response } from "express";
import { ConfirmCodeDTO_I } from "./DTO";
import { ConfirmCodeUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ConfirmCodeController = (
  confirmCodeUseCase: ConfirmCodeUseCase
) => {
  const execute = async (
    req: Request<any, any, ConfirmCodeDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await confirmCodeUseCase.run(req.body);
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
