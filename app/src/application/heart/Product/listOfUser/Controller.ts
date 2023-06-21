import { Request, Response } from "express";
import { ListProductOfUserDTO_I } from "./DTO";
import { ListProductOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ListProductOfUserController = (
  listProductOfUserUseCase: ListProductOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, ListProductOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await listProductOfUserUseCase.run(req.body);
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
