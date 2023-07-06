import { Decimal } from "@prisma/client/runtime";

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
  userId: number;
  login: string | null;
  password: string | null;
  plan: { name: string; price: Decimal } | null;
  product: { name: string } | null;
  comments: string | null;
  dueDate: Date | null;
  full_name: string;
  whatsapp: string;
}

export interface SendMessageCustomerRepository_I {
  update({ id, ...props }: propsUpdate_I): Promise<void>;
  findCust(id: number): Promise<result_I | null>;
}
