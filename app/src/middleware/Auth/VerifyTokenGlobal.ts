import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";

interface verifyTokenAcessGlobal_I {
  execute(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export type expect_I = 1 | 2 | 3 | 4 | 5 | 6;

export const verifyTokenAcessGlobal = (
  expect: expect_I
): verifyTokenAcessGlobal_I => {
  const execute = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const authorization = req.headers.authorization;

    const splitAuth = authorization?.split(" ").length;
    const BEARER = authorization?.split(" ")[0];

    if (splitAuth !== 2) {
      return res.status(401).json({
        message:
          "Authorização incorreta! Cuidado, sua maquina poderá ser bloqueada.",
      });
    }

    if (BEARER !== "BEARER") {
      return res.status(401).json({
        message:
          "Authorização incorreta! Cuidado, sua maquina poderá ser bloqueada.",
      });
    }

    const TOKEN = authorization?.split(" ")[1]!;

    try {
      await decodeToken(TOKEN, String(process.env[`SECRET_TOKEN_${expect}`]));
      return next();
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  };

  return { execute };
};
