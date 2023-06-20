import { Request, Response } from "express";
import { CreateCustomerDTO_I } from "./DTO";
import { CreateCustomerUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CreateCustomerController = (
  createCustomerUseCase: CreateCustomerUseCase
) => {
  const execute = async (
    req: Request<any, any, CreateCustomerDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createCustomerUseCase.run(req.body);
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
