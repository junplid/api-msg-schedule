import { Request, Response } from "express";
import { CreateSessionWhatsappDTO_I } from "./DTO";
import { CreateSessionWhatsappUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CreateSessionWhatsappController = (
  createSessionWhatsappUseCase: CreateSessionWhatsappUseCase
) => {
  const execute = async (
    req: Request<any, any, CreateSessionWhatsappDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createSessionWhatsappUseCase.run(req.body);
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
