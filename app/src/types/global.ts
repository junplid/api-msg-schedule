import { Request, Response } from "express";

export interface GlobalController_I<T = any> {
  execute(req: Request<any>, res: Response, outher?: T): Promise<Response>;
}

export interface RunUseCase_I<T = any> {
  message: string;
  data?: T;
}
