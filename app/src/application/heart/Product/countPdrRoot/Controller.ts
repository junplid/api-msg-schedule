import { Request, Response } from "express";
import { CountProductsDTO_I } from "./DTO";
import { CountProductsUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CountProductsController = (
  countProductsUseCase: CountProductsUseCase
) => {
  const execute = async (
    req: Request<any, any, CountProductsDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await countProductsUseCase.run(req.body);
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
