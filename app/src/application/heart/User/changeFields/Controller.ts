import { Request, Response } from "express";
import { ChangeFieldsUserDTO_I } from "./DTO";
import { ChangeFieldsUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ChangeFieldsUserController = (
  changeFieldsUserUseCase: ChangeFieldsUserUseCase
) => {
  const execute = async (
    req: Request<any, any, { userId: number }, ChangeFieldsUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await changeFieldsUserUseCase.run({
        ...req.query,
        userId: req.body.userId,
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
