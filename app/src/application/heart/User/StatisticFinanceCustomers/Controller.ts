import { Request, Response } from "express";
import { StatisticFinanceCustomersDTO_I } from "./DTO";
import { StatisticFinanceCustomersUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const StatisticFinanceCustomersController = (
  statisticFinanceCustomersUseCase: StatisticFinanceCustomersUseCase
) => {
  const execute = async (
    req: Request<any, any, StatisticFinanceCustomersDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await statisticFinanceCustomersUseCase.run(req.body);
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
