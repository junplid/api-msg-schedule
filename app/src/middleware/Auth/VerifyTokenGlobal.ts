import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";
import { PrismaClient } from "@prisma/client";
import { getTokenHeader } from "../../common/utils/get-token";

interface verifyTokenAcessGlobal_I {
  execute(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export type expect_I = "USER" | "ROOT";

export const verifyTokenAcessGlobal = (
  expect: expect_I
): verifyTokenAcessGlobal_I => {
  const execute = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const TOKEN = await getTokenHeader(req);

    try {
      const { key } = await decodeToken(
        TOKEN,
        String(process.env[`SECRET_TOKEN_API_${expect}`])
      );

      const userExist = await new PrismaClient().users.count({
        where: { key },
      });

      if (!userExist) {
        return res.status(401).json({
          message: "Não autorizado.",
        });
      }

      return next();
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  };

  return { execute };
};
