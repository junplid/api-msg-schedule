import { Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";
import { PrismaClient } from "@prisma/client";

export const VerifyTokenMiddleware = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { token } = req.params;

  try {
    const key_root = await decodeToken(
      token,
      String(process.env.SECRET_TOKEN_API_ROOT)
    )
      .then((e) => e.key)
      .catch(() => null);

    const key_user = await decodeToken(
      token,
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
    return res.status(200).json({
      message: "Ok",
      data: { ...userExist, key: key_root ?? key_user },
    });
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
