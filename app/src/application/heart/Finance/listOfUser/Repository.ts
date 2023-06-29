import { Decimal } from "@prisma/client/runtime";

export interface resultList_I {
  id: number;
  payday: Date;
  name: string;
  price: Decimal;
  type_transation: string;
}

export interface propsGet_I {
  skip: number;
  userId: number;
  amount: number;
  search?: string;
  afterDate?: Date;
  beforeDate?: Date;
  type_transation?: "PROHIBITED" | "EXIT";
}

export interface ListFinanceOfUserRepository_I {
  getUser(userId: number): Promise<string | null>;
  get(props: propsGet_I): Promise<resultList_I[]>;
}
