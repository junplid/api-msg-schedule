import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";
import { PrismaClient } from "@prisma/client";
import { getTokenHeader } from "../../common/utils/get-token";

interface verifyTokenAcessGlobal_I {
  execute(req: Request, res: Response, next: NextFunction): Promise<any>;
}

export const verifyTokenAcessGlobal = (): verifyTokenAcessGlobal_I => {
  const execute = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<any> => {
    const TOKEN = await getTokenHeader(req);

    try {
      const key_root = await decodeToken(
        TOKEN,
        String(process.env.SECRET_TOKEN_API_ROOT)
      )
        .then((e) => e.key)
        .catch(() => null);

      const key_user = await decodeToken(
        TOKEN,
        String(process.env.SECRET_TOKEN_API_USER)
      )
        .then((e) => e.key)
        .catch(() => null);

      if (!key_root && !key_user) {
        return res.status(401).json({
          message: "Não autorizado.",
        });
      }

      const userExist = await new PrismaClient().users.findUnique({
        where: { key: (key_root ?? key_user) as string },
        select: { full_name: true, type: true },
      });

      if (!userExist) {
        return res.status(401).json({
          message: "Não autorizado.",
        });
      }

      req.body.user_key = key_root ?? key_user;

      return next();
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  };

  return { execute };
};
