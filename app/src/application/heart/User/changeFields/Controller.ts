import { Request, Response } from "express";
import { ChangeFieldsUserDTO_I } from "./DTO";
import { ChangeFieldsUserUseCase } from "./UseCase";
import { getTokenHeader } from "../../../../common/utils/get-token";
import { decodeToken } from "../../../../common/utils/token-access";
import { ValidationError } from "express-validation";

export const ChangeFieldsUserController = (
  changeFieldsUserUseCase: ChangeFieldsUserUseCase
) => {
  const execute = async (
    req: Request<any, any, any, ChangeFieldsUserDTO_I>,
    res: Response
  ): Promise<Response> => {
    try {
      const token = await getTokenHeader(req);
      const { key } = await decodeToken(
        token,
        process.env.SECRET_TOKEN_API_USER as string
      );

      const data = await changeFieldsUserUseCase.run({ ...req.query, key });
      return res.status(200).json(data);
    } catch (error: any) {
      if (error instanceof ValidationError) {
        return res.status(error.statusCode).json(error.details);
      }
      return res.status(500).json(error);
    }
  };

  return { execute };
};
