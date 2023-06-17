import { Request, Response } from "express";
import { ListMessageOfUserDTO_I } from "./DTO";
import { ListMessageOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ListMessageOfUserController = (
  listMessageOfUserUseCase: ListMessageOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, ListMessageOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await listMessageOfUserUseCase.run(req.body);
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
