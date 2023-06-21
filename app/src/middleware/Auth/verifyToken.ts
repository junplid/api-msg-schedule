import { Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";
import { PrismaClient } from "@prisma/client";

export const VerifyTokenMiddleware = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { token } = req.params;

  try {
    const userId_root = await decodeToken(
      token,
      String(process.env.SECRET_TOKEN_API_ROOT)
    )
      .then((e) => e.id)
      .catch(() => null);

    const userId_user = await decodeToken(
      token,
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
      select: { full_name: true, type: true, due_date: true },
    });

    if (!userExist) {
      return res.status(401).json({
        message: "Não autorizado.",
      });
    }
    return res.status(200).json({
      message: "Ok",
      data: { ...userExist, id: userId_root ?? userId_user },
    });
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
