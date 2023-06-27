import { Request, Response } from "express";
import { CustomerStatisticsUserDTO_I } from "./DTO";
import { CustomerStatisticsUserUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CustomerStatisticsUserController = (
  customerStatisticsUserUseCase: CustomerStatisticsUserUseCase
) => {
  const execute = async (
    req: Request<any, any, CustomerStatisticsUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await customerStatisticsUserUseCase.run(req.body);
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
