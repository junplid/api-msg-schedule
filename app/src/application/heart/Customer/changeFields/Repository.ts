import { Decimal } from "@prisma/client/runtime";
import { Payment_I } from "../../../../entities/Payment";

type Invoice_T = "PAY" | "PENDING";

export type propsUpdate_I = {
  readonly id: number;
  full_name?: string;
  whatsapp?: string;
  login?: string;
  password?: string;
  invoice?: Invoice_T;
  dueDate?: Date;
  comments?: string;
  readonly planId?: number;
  readonly productId?: number;
  readonly messageId?: number[];
};

export interface ChangeCustomerFieldsRepository_I {
  update({ id, ...props }: propsUpdate_I): Promise<void>;
  deleteAllMsg(id: number): Promise<void>;
  createCustomerMessage(customerId: number, messageId: number): Promise<void>;
  findCust(id: number): Promise<{
    invoice: string | null;
    userId: number;
    full_name: string;
    login: string | null;
  } | null>;
  createPayment(data: Payment_I): Promise<void>;
  findProduct(
    pdrId: number
  ): Promise<{ price: number | Decimal; name: string } | null>;
  findPlan(planId: number): Promise<number | Decimal | null>;
}
