import { Payment_I } from "../../../../entities/Payment";

export interface RenewLicenseRepository_I {
  create(data: Omit<Payment_I, "id">): Promise<void>;
  getInfo(id: number): Promise<{ due_date: Date | null } | null>;
  update(userId: number, new_due_date: Date): Promise<void>;
}
