import { Decimal } from "@prisma/client/runtime";

export interface Payment_I {
  readonly id: number;
  price: number | Decimal;
  payday: Date;
  type: string | "root" | "user";
  userId: number;
}
