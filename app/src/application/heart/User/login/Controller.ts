import { Request, Response } from "express";
import { LoginDTO_I } from "./DTO";
import { LoginUseCase } from "./UseCase";

export const LoginController = (loginUseCase: LoginUseCase) => {
  const execute = async (
    req: Request<any, any, LoginDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await loginUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      return res.status(error.statusCode).json(error.details);
    }
  };

  return { execute };
};
