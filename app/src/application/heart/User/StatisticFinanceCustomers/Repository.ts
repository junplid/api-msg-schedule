import { Decimal } from "@prisma/client/runtime";

export interface result_I {
  payday: Date;
  id: number;
  price: Decimal;
}

export interface StatisticFinanceCustomersRepository_I {
  get(userId: number): Promise<result_I[]>;
}
