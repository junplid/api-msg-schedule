import { Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";

export const VerifyToken = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { token, nivel } = req.params;

  try {
    const tokenData = await decodeToken(
      token,
      String(process.env[`SECRET_TOKEN_${nivel}`])
    );

    return res.status(200).json({
      message: "Token de acesso valido. Bem-vindo de volta.",
      data: {
        token,
        level: tokenData?.level,
        idUser: tokenData?.id,
        parther_id: tokenData?.parther_id,
      },
    });
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
