import { Request, Response } from "express";
import { CreateProductDTO_I } from "./DTO";
import { CreateProductUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CreateProductController = (
  createProductUseCase: CreateProductUseCase
) => {
  const execute = async (
    req: Request<any, any, CreateProductDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createProductUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error.details);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
