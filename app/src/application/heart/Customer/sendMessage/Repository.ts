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

export interface result_I {
  whatsapp: string;
  userId: number;
  full_name: string;
  login: string;
  password: string;
  dueDate: Date;
  comments: string;
  plan: { name: string };
  product: { name: string };
}

export interface SendMessageCustomerRepository_I {
  update({ id, ...props }: propsUpdate_I): Promise<void>;
  findCust(id: number): Promise<result_I | null>;
}
