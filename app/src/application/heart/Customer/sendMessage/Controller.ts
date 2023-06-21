import { Request, Response } from "express";
import { SendMessageCustomerDTO_I } from "./DTO";
import { SendMessageCustomerUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const SendMessageCustomerController = (
  sendMessageCustomerUseCase: SendMessageCustomerUseCase
) => {
  const execute = async (
    req: Request<any, any, SendMessageCustomerDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await sendMessageCustomerUseCase.run({
        ...req.body,
      });
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
