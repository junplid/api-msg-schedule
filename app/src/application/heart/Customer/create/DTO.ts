type Invoice_T = "PAY" | "PENDING";

export interface CreateCustomerDTO_I {
  full_name: string;
  whatsapp: string;
  login: string;
  password: string;
  invoice: Invoice_T;
  dueDate: Date;
  comments: string;
  readonly planId: number;
  readonly productId: number;
  readonly messageId: number[];
  readonly userId: number;
}
