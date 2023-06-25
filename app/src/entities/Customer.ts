type Invoice_T = "PAY" | "PENDING";

export interface Customer {
  readonly id: number;
  full_name: string;
  whatsapp: string;
  login: string | null;
  password: string | null;
  invoice: Invoice_T | string | null;
  dueDate: Date | null;
  comments: string | null;
  readonly planId: number | null;
  readonly userId: number;
  readonly productId: number | null;
  message: {
    message: {
      days: number;
      id: number;
    };
  }[];
}
