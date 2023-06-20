type Invoice_T = "PAY" | "PENDING";

export interface Customer {
  readonly id: number;
  full_name: string;
  whatsapp: string;
  login: string;
  password: string;
  invoice: Invoice_T | string | null;
  dueDate: Date;
  comments: string;
  readonly planId: number;
  readonly userId: number;
  readonly productId: number;
  message: {
    message: {
      days: number;
      id: number;
    };
  }[];
}
