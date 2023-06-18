import { CreateProductRepository_I } from "./Repository";
import { CreateProductDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CreateProductUseCase {
  constructor(private createProduct: CreateProductRepository_I) {}

  async run(dto: CreateProductDTO_I): Promise<RunUseCase_I> {
    const data = await this.createProduct.create(dto);

    return {
      message: "OK",
      data,
    };
  }
}
