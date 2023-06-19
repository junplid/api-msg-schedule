import { Request, Response } from "express";
import {
  ChangeFieldsProductDTO_I,
  ChangeFieldsProductDTO_I_Params,
} from "./DTO";
import { ChangeFieldsProductUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ChangeFieldsProductController = (
  changeFieldsProductUseCase: ChangeFieldsProductUseCase
) => {
  const execute = async (
    req: Request<
      ChangeFieldsProductDTO_I_Params,
      any,
      { userId: number },
      ChangeFieldsProductDTO_I
    >,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await changeFieldsProductUseCase.run({
        ...req.query,
        userId: req.body.userId,
        id: req.params.id,
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
