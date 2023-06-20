import { Customer } from "../../../../entities/Customer";

export interface resultList_I extends Omit<Customer, "userId"> {
  product: {
    name: string;
  };
  plan: {
    name: string;
  };
}

export interface ListCustomerOfUserRepository_I {
  get(userId: number): Promise<resultList_I[]>;
}
