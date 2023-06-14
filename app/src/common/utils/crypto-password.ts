import { hash, genSalt, compare } from "bcrypt";

export const generatePassword = async (password: string) => {
  const salt = await genSalt(8);
  return await hash(password, salt);
};

export const comparePassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  return await compare(password, hash);
};
