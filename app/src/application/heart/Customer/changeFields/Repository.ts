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
};

export interface ChangeCustomerFieldsRepository_I {
  update({ id, ...props }: propsUpdate_I): Promise<void>;
  findCust(id: number): Promise<number | null>;
}
