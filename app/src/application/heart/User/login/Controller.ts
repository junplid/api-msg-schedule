import { Request, Response } from "express";
import { LoginDTO_I } from "./DTO";
import { LoginUseCase } from "./UseCase";
import { RunUseCase_I } from "../../../../types/global";

export const LoginController = (loginUseCase: LoginUseCase) => {
  const execute = async (
    req: Request<any, any, LoginDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await loginUseCase.run(req.body);
      return res.status(201).json(data);
    } catch (error: any) {
      const err: RunUseCase_I = error;
      return res.status(err.status ?? 400).json(err);
    }
  };

  return { execute };
};
