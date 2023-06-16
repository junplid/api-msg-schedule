import { Request, Response } from "express";
import { ConfirmCodeDTO_I } from "./DTO";
import { ConfirmCodeUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ConfirmCodeController = (
  confirmCodeUseCase: ConfirmCodeUseCase
) => {
  const execute = async (
    req: Request<ConfirmCodeDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await confirmCodeUseCase.run(req.params);
      return res.status(200).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error.details);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
