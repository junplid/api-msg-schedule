import { CountProductsRepository_I } from "./Repository";
import { CountProductsDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountProductsUseCase {
  constructor(private countProducts: CountProductsRepository_I) {}

  async run(dto: CountProductsDTO_I): Promise<RunUseCase_I> {
    const data = await this.countProducts.get();

    return {
      message: "OK",
      data,
    };
  }
}
