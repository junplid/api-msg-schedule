import { Request } from "express";

export const getTokenHeader = async (
  req: Request<any, any, any, any>
): Promise<string> => {
  const authorization = req.headers.authorization;

  const splitAuth = authorization?.split(" ").length;
  const BEARER = authorization?.split(" ")[0];

  if (splitAuth !== 2) {
    throw new Error("Não authorizado.");
  }

  if (BEARER !== "BEARER") {
    throw new Error("Não authorizado.");
  }

  const TOKEN = authorization?.split(" ")[1]!;
  return TOKEN;
};
