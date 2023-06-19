import { Plans, Product } from "../../../../entities/Product";

export interface ListProductOfUserRepository_I {
  get(user_key: string): Promise<Omit<Product, "user_key">[]>;
}
