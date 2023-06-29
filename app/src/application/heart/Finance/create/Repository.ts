import { Payment_I } from "../../../../entities/Payment";

export interface CreatePaymentRepository_I {
  createPayment(data: Omit<Payment_I, "id">): Promise<number>;
}
