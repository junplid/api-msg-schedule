import { Request, Response } from "express";
import { CustomerStatisticsRootDTO_I } from "./DTO";
import { CustomerStatisticsRootUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const CustomerStatisticsRootController = (
  customerStatisticsRootUseCase: CustomerStatisticsRootUseCase
) => {
  const execute = async (
    req: Request<any, any, CustomerStatisticsRootDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await customerStatisticsRootUseCase.run(req.body);
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
