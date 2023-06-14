import { sign, verify } from "jsonwebtoken";
import { expect_I } from "../../middleware/Auth/VerifyTokenGlobal";

interface TokenProps {
  id: string;
  key?: string;
  level: expect_I | number;
  parther_id?: string;
}

export const createToken = async (
  data: TokenProps,
  secret: string
): Promise<string> => {
  return sign(data, secret);
};

export const decodeToken = async (
  token: string,
  secret: string
): Promise<TokenProps> => {
  try {
    const data: any = verify(token, secret);
    return data;
  } catch (error) {
    throw new Error("Não autorizado.");
  }
};
