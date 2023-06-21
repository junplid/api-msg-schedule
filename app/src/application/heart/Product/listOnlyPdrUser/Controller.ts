import { Request, Response } from "express";
import { ListOnlyProductOfUserDTO_I } from "./DTO";
import { ListOnlyProductOfUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ListOnlyProductOfUserController = (
  listOnlyProductOfUserUseCase: ListOnlyProductOfUserUseCase
) => {
  const execute = async (
    req: Request<any, any, ListOnlyProductOfUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await listOnlyProductOfUserUseCase.run(req.body);
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
