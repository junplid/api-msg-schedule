import { Request, Response } from "express";
import { CreatePaymentDTO_I } from "./DTO";
import { CreatePaymentUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CreatePaymentController = (
  createPaymentUseCase: CreatePaymentUseCase
) => {
  const execute = async (
    req: Request<any, any, CreatePaymentDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createPaymentUseCase.run(req.body);
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
