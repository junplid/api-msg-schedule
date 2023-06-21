import { Request, Response } from "express";
import { CreateUserDTO_I } from "./DTO";
import { CreateUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CreateUserController = (createUserUseCase: CreateUserUseCase) => {
  const execute = async (
    req: Request<any, any, CreateUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createUserUseCase.run(req.body);
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
