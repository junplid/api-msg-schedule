import { Plans, Product } from "../../../../entities/Product";

export type propsCreatePData_I = Omit<
  Product<Omit<Plans, "id" | "product_id">[]>,
  "id"
>;

export interface result_I {
  id: number;
  plan: {
    id: number;
    name: string;
  }[];
}

export interface CreateProductRepository_I {
  create(data: propsCreatePData_I): Promise<result_I>;
}
