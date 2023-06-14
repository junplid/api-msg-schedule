import { Request, Response } from "express";
import { decodeToken } from "./token-access";

export const verify_if_is_parther_token_header = async (
  req: Request<any, any, any, any, any>,
  res: Response,
  level: string,
  parther_id_params?: string
) => {
  const token = req.headers.authorization?.split(" ")[1]!;

  const { parther_id } = await decodeToken(
    token,
    process.env[`SECRET_TOKEN_${level}`]!
  );

  if (level !== "6") {
    if (parther_id !== parther_id_params) {
      return res.status(500).json({ message: "not authorization." });
    }
  }
  return;
};
