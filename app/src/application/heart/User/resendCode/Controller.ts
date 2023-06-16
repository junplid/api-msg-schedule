import { Request, Response } from "express";
import { ResendCodeDTO_I } from "./DTO";
import { ResendCodeUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ResendCodeController = (resendCodeUseCase: ResendCodeUseCase) => {
  const execute = async (
    req: Request<ResendCodeDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await resendCodeUseCase.run(req.params);
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
