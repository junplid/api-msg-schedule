import { Request, Response } from "express";
import {
  ChangeFieldsPlanProductDTO_I,
  ChangeFieldsPlanProductDTO_I_Params,
} from "./DTO";
import { ChangeFieldsPlanProductUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ChangeFieldsPlanProductController = (
  changeFieldsPlanProductUseCase: ChangeFieldsPlanProductUseCase
) => {
  const execute = async (
    req: Request<
      ChangeFieldsPlanProductDTO_I_Params,
      any,
      { userId: number },
      ChangeFieldsPlanProductDTO_I
    >,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await changeFieldsPlanProductUseCase.run({
        ...req.query,
        userId: req.body.userId,
        productId: req.params.productId,
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
