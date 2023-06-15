import { sign, verify } from "jsonwebtoken";

interface TokenProps {
  key: string;
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
