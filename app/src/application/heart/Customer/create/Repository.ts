import { Decimal } from "@prisma/client/runtime";
import { Payment_I } from "../../../../entities/Payment";

type Invoice_T = "PAY" | "PENDING";

export type propsCreateCData_I = {
  full_name: string;
  whatsapp: string;
  login: string;
  password: string;
  invoice: Invoice_T;
  dueDate: Date;
  comments: string;
  readonly planId?: number;
  readonly productId?: number;
  readonly userId: number;
};

export interface CreateCustomerRepository_I {
  createPayment(data: Payment_I): Promise<void>;
  findPlan(planId: number): Promise<number | Decimal | null>;
  findProduct(
    pdrId: number
  ): Promise<{ price: number | Decimal; name: string } | null>;
  createCustomer(props: propsCreateCData_I): Promise<number>;
  createCustomerMessage(customerId: number, messageId: number): Promise<void>;
}
