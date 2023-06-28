import { Decimal } from "@prisma/client/runtime";
import { Payment_I } from "../../../../entities/Payment";

export interface resultFind_I {
  expense: number | Decimal;
  sale: number | Decimal;
  profit: number | Decimal;
  userId: number;
}

export interface RenewCustomerRepository_I {
  findCust(customerId: number): Promise<resultFind_I | null>;
  updateDueDate(customerId: number, newDate: Date): Promise<void>;
  createPayment(data: Payment_I): Promise<void>;
}
