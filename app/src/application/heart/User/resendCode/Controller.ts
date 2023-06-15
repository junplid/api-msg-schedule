import { Request, Response } from "express";
import { ResendCodeDTO_I } from "./DTO";
import { ResendCodeUseCase } from "./UseCase";

export const ResendCodeController = (resendCodeUseCase: ResendCodeUseCase) => {
  const execute = async (
    req: Request<ResendCodeDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await resendCodeUseCase.run(req.params);
      return res.status(200).json(data);
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  };

  return { execute };
};
