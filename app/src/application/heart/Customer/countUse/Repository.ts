import { Customer } from "../../../../entities/Customer";

export interface resultCount_I extends Omit<Customer, "userId"> {
  product: {
    name: string;
  } | null;
  plan: {
    name: string;
  } | null;
}

export interface propsGet_I {
  skip: number;
  userId: number;
  amount: number;
  name?: string;
  afterDate?: Date;
  beforeDate?: Date;
  whatsapp?: string;
  login?: string;
  invoice?: "PAY" | "PENDING";
  planId?: number;
  productId?: number;
}

export interface CountCustomerOfUserRepository_I {
  get(props: propsGet_I): Promise<number>;
}
