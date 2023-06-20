import { Customer } from "../../../../entities/Customer";

export interface ListCustomerOfUserRepository_I {
  get(userId: number): Promise<Omit<Customer, "userId">[]>;
}
