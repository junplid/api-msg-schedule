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
    try {
      const TOKEN = await getTokenHeader(req);
      const userId_root = await decodeToken(
        TOKEN,
        String(process.env.SECRET_TOKEN_API_ROOT)
      )
        .then((e) => e.id)
        .catch(() => null);

      const userId_user = await decodeToken(
        TOKEN,
        String(process.env.SECRET_TOKEN_API_USER)
      )
        .then((e) => e.id)
        .catch(() => null);

      if (!userId_root && !userId_user) {
        return res.status(401).json({
          message: "Não autorizado.",
        });
      }

      const userExist = await new PrismaClient().users.findUnique({
        where: { id: (userId_root ?? userId_user) as number },
        select: { full_name: true, type: true },
      });

      if (!userExist) {
        return res.status(401).json({
          message: "Não autorizado.",
        });
      }

      req.body.userId = userId_root ?? userId_user;

      return next();
    } catch (error: any) {
      return res.status(401).json({
        message: error.message,
      });
    }
  };

  return { execute };
};
