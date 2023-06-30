export interface CountCustomerOfUserDTO_I {
  page?: number;
  amount?: number;
  name?: string;
  afterDate?: Date;
  beforeDate?: Date;
  whatsapp?: string;
  login?: string;
  invoice?: "PAY" | "PENDING";
  planId?: number;
  productId?: number;
}
