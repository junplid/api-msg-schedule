import { Plans, Product } from "../../../../entities/Product";

export interface ListOnlyProductOfUserRepository_I {
  get(userId: number): Promise<Omit<Product, "userId" | "plans">[]>;
}
