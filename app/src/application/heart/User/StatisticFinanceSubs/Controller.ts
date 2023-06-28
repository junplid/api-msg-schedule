import { Request, Response } from "express";
import { StatisticFinanceSubsDTO_I } from "./DTO";
import { StatisticFinanceSubsUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const StatisticFinanceSubsController = (
  statisticFinanceSubsUseCase: StatisticFinanceSubsUseCase
) => {
  const execute = async (
    req: Request<any, any, StatisticFinanceSubsDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await statisticFinanceSubsUseCase.run(req.body);
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
