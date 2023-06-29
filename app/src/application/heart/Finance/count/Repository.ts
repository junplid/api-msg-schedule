export interface propsGet_I {
  skip: number;
  userId: number;
  amount: number;
  search?: string;
  afterDate?: Date;
  beforeDate?: Date;
  type_transation?: "PROHIBITED" | "EXIT";
}

export interface CountFinanceOfUserRepository_I {
  get(userId: number, filter: propsGet_I): Promise<number>;
}
