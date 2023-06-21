import { Request, Response } from "express";
import {
  ChangeFieldsMessageDTO_I,
  ChangeFieldsMessageDTO_I_Params,
} from "./DTO";
import { ChangeFieldsMessageUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ChangeFieldsMessageController = (
  changeFieldsMessageUseCase: ChangeFieldsMessageUseCase
) => {
  const execute = async (
    req: Request<
      ChangeFieldsMessageDTO_I_Params,
      any,
      { userId: number },
      ChangeFieldsMessageDTO_I
    >,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await changeFieldsMessageUseCase.run({
        ...req.query,
        userId: req.body.userId,
        id: req.params.id,
      });
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
