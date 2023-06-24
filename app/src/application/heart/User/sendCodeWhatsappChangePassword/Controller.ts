import { Request, Response } from "express";
import { SendCodeWhatsappChangePasswordDTO_I } from "./DTO";
import { SendCodeWhatsappChangePasswordUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const SendCodeWhatsappChangePasswordController = (
  sendCodeWhatsappChangePasswordUseCase: SendCodeWhatsappChangePasswordUseCase
) => {
  const execute = async (
    req: Request<any, any, SendCodeWhatsappChangePasswordDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await sendCodeWhatsappChangePasswordUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 500).json(error.details ?? error);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
