import { Request, Response } from "express";
import { ListCustomerOfUserDTO_I } from "./DTO";
import { ListCustomerOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ListCustomerOfUserController = (
  listCustomerOfUserUseCase: ListCustomerOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, ListCustomerOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await listCustomerOfUserUseCase.run(req.body);
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
