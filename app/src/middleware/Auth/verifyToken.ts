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

    console.log("root", key_root);

    const key_user = await decodeToken(
      token,
      String(process.env.SECRET_TOKEN_API_USER)
    )
      .then((e) => e.key)
      .catch(() => null);

    console.log("user", key_user);

    if (!key_root && !key_user) {
      return res.status(401).json({
        message: "Não autorizado.",
      });
    }

    const userExist = await new PrismaClient().users.count({
      where: { key: (key_root ?? key_user) as string },
    });

    console.log(userExist);

    if (!userExist) {
      return res.status(401).json({
        message: "Não autorizado.",
      });
    }
    return res.status(200).json({
      message: "Ok",
    });
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
