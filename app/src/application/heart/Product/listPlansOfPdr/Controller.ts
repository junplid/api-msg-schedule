import { Request, Response } from "express";
import { ListPlansOfPdrDTO_I } from "./DTO";
import { ListPlansOfPdrUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ListPlansOfPdrController = (
  listPlansOfPdrUseCase: ListPlansOfPdrUseCase
) => {
  const execute = async (
    req: Request<ListPlansOfPdrDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await listPlansOfPdrUseCase.run(req.params);
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
