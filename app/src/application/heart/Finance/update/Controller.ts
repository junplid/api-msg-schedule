import { Request, Response } from "express";
import { UpdatePaymentDTO_I } from "./DTO";
import { UpdatePaymentUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const UpdatePaymentController = (
  updatePaymentUseCase: UpdatePaymentUseCase
) => {
  const execute = async (
    req: Request<any, any, UpdatePaymentDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await updatePaymentUseCase.run(req.body);
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
