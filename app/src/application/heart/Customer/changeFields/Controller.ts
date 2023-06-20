import { Request, Response } from "express";
import {
  ChangeCustomerFieldsDTO_I,
  ChangeCustomerFieldsDTO_I_Params,
} from "./DTO";
import { ChangeCustomerFieldsUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const ChangeCustomerFieldsController = (
  changeCustomerFieldsUseCase: ChangeCustomerFieldsUseCase
) => {
  const execute = async (
    req: Request<
      ChangeCustomerFieldsDTO_I_Params,
      any,
      ChangeCustomerFieldsDTO_I
    >,
    res: Response
  ): Promise<Response> => {
    try {
      const data = await changeCustomerFieldsUseCase.run({
        ...req.body,
        ...req.params,
      });
      return res.status(201).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error.details);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
