export interface CountFinanceOfUserDTO_I {
  page?: number;
  amount?: number;
  search?: string;
  afterDate?: Date;
  beforeDate?: Date;
  type_transation?: "PROHIBITED" | "EXIT";
}
