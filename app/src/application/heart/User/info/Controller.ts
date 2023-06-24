import { Request, Response } from "express";
import { InfoUserDTO_I } from "./DTO";
import { InfoUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const InfoUserController = (infoUserUseCase: InfoUserUseCase) => {
  const execute = async (
    req: Request<any, any, InfoUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await infoUserUseCase.run(req.body);
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
