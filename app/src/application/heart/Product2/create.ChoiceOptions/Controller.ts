import { Request, Response } from "express";
import { CreateChoiceOptionDTO_I } from "./DTO";
import { CreateChoiceOptionUseCase } from "./UseCase";

export const CreateChoiceOptionController = (
  createChoiceOptionUseCase: CreateChoiceOptionUseCase
) => {
  const execute = async (
    req: Request<any, any, CreateChoiceOptionDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await createChoiceOptionUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(500).json({ message: error.message });
    }
  };

  return { execute };
};
