import { Request, Response } from "express";
import { GetStateSessionWhatsappDTO_I } from "./DTO";
import { GetStateSessionWhatsappUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const GetStateSessionWhatsappController = (
  getStateSessionWhatsappUseCase: GetStateSessionWhatsappUseCase
) => {
  const execute = async (
    req: Request<any, any, GetStateSessionWhatsappDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await getStateSessionWhatsappUseCase.run(req.body);
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
