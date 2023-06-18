import { Request, Response } from "express";
import { DellMessageOfUserDTO_I } from "./DTO";
import { DellMessageOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const DellMessageOfUserController = (
  dellMessageOfUserUseCase: DellMessageOfUserUseCase
) => {
  const execute = async (
    req: Request<DellMessageOfUserDTO_I, any, { user_key: string }>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await dellMessageOfUserUseCase.run({
        id: req.params.id,
        user_key: req.body.user_key,
      });
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
