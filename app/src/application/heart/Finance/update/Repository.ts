import { Payment_I } from "../../../../entities/Payment";

export interface UpdatePaymentRepository_I {
  updatePayment(data: Payment_I): Promise<number>;
  updateAmountUser(data: {
    valueaction: number;
    userId: number;
  }): Promise<void>;
}
