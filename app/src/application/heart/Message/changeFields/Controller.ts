import { Request, Response } from "express";
import { ChangeFieldsMessageDTO_I } from "./DTO";
import { ChangeFieldsMessageUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ChangeFieldsMessageController = (
  changeFieldsMessageUseCase: ChangeFieldsMessageUseCase
) => {
  const execute = async (
    req: Request<any, any, { user_key: string }, ChangeFieldsMessageDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await changeFieldsMessageUseCase.run({
        ...req.query,
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
