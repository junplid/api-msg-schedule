import { Request, Response } from "express";
import { RemoveMessageOfCustomerDTO_I } from "./DTO";
import { RemoveMessageOfCustomerUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const RemoveMessageOfCustomerController = (
  removeMessageOfCustomerUseCase: RemoveMessageOfCustomerUseCase
) => {
  const execute = async (
    req: Request<RemoveMessageOfCustomerDTO_I, any, { userId: number }>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await removeMessageOfCustomerUseCase.run(
        { ...req.params },
        req.body.userId
      );
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
