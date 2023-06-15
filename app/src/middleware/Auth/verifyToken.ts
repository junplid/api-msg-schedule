import { Request, Response } from "express";
import { decodeToken } from "../../common/utils/token-access";

export const VerifyToken = async (
  req: Request,
  res: Response
): Promise<Response | void> => {
  const { token, nivel } = req.params;

  try {
    await decodeToken(token, String(process.env[`SECRET_TOKEN_API_${nivel}`]));

    return res.status(200).json({
      message: "OK",
      data: { token },
    });
  } catch (error: any) {
    return res.status(401).json({
      message: error.message,
    });
  }
};
