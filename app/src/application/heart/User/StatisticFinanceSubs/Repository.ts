import { Decimal } from "@prisma/client/runtime";

export interface result_I {
  payday: Date;
  id: number;
  price: Decimal;
}

export interface StatisticFinanceSubsRepository_I {
  get(): Promise<result_I[]>;
}
