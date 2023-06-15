import { Request, Response } from "express";
import { ConfirmCodeDTO_I } from "./DTO";
import { ConfirmCodeUseCase } from "./UseCase";

export const ConfirmCodeController = (
  confirmCodeUseCase: ConfirmCodeUseCase
) => {
  const execute = async (
    req: Request<ConfirmCodeDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await confirmCodeUseCase.run(req.params);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  return { execute };
};
