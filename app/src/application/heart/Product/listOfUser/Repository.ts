import { Plans, Product } from "../../../../entities/Product";

export interface ListProductOfUserRepository_I {
  get(userId: number): Promise<Omit<Product, "userId">[]>;
}
