import { Decimal } from "@prisma/client/runtime";
import { Payment_I } from "../../../../entities/Payment";

export interface resultFind_I {
  expense: number | Decimal;
  sale: number | Decimal;
  profit: number | Decimal;
  full_name: string;
  login: string | null;
  userId: number;
  name: string;
}

export interface RenewCustomerRepository_I {
  findCust(customerId: number): Promise<resultFind_I | null>;
  updateDueDate(customerId: number, newDate: Date): Promise<void>;
  createPayment(data: Payment_I): Promise<void>;
  sumAmount(userId: number, vl: number): Promise<void>;
}
