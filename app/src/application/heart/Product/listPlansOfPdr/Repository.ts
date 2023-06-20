import { Plans } from "../../../../entities/Product";

export interface ListPlansOfPdrRepository_I {
  get(userId: number): Promise<Omit<Plans, "productId">[]>;
}
