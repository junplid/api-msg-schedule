import { Decimal } from "@prisma/client/runtime";

export interface DellPaymentOfUserRepository_I {
  dell(id: number): Promise<void>;
  findPay(id: number): Promise<{
    userId: number;
    price: Decimal;
    type_transation: string | "PROHIBITED" | "EXIT";
  } | null>;
  decAmount(userId: number, vl: number): Promise<void>;
}
