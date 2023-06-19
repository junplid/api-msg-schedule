import moment from "moment";
import { v4 } from "uuid";

type TypesUser_T = "user" | "root";

export interface User_I {
  id: number;
  full_name: string;
  whatsapp: string;
  email: string;
  password: string;
  type: TypesUser_T;
  code?: string;
  available?: number;
  payday?: Date;
  due_date?: Date;
  createAt: Date;
}

export function newUser(
  props: Omit<User_I, "id" | "createAt" | "key">
): Omit<User_I, "id"> {
  return {
    ...props,
    due_date: new Date(moment().add(7, "days").toString()),
    createAt: new Date(),
    code: String(Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000),
  };
}
