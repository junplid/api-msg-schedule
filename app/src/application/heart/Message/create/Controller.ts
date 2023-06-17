import { Request, Response } from "express";
import { CreateMessageDTO_I } from "./DTO";
import { CreateMessageUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CreateMessageController = (
  createMessageUseCase: CreateMessageUseCase
) => {
  const execute = async (
    req: Request<any, any, CreateMessageDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createMessageUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error.details);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
