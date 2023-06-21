import { Request, Response } from "express";
import { RenewLicenseDTO_I_Params } from "./DTO";
import { RenewLicenseUseCase } from "./UseCase";
import { ValidationError } from "express-validation";

export const RenewLicenseController = (
  renewLicenseUseCase: RenewLicenseUseCase
) => {
  const execute = async (
    req: Request<RenewLicenseDTO_I_Params>,
    res: Response
  ): Promise<Response> => {
    try {
      if (req.body?.data?.id) {
        const data = await renewLicenseUseCase.run(req.params);
        return res.status(201).json(data);
      }
      return res.status(201).json({});
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode ?? 500).json(error.details ?? error);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
