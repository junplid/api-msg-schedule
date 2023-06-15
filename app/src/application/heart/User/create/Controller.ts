import { Request, Response } from "express";
import { CreateUserDTO_I } from "./DTO";
import { CreateUserUseCase } from "./UseCase";

export const CreateUserController = (
  createChoiceOptionUseCase: CreateUserUseCase
) => {
  const execute = async (
    req: Request<any, any, CreateUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createChoiceOptionUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  return { execute };
};
