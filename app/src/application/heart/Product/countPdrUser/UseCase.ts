import { CountProductsUserRepository_I } from "./Repository";
import { CountProductsUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountProductsUserUseCase {
  constructor(private countProductsUser: CountProductsUserRepository_I) {}

  async run(dto: CountProductsUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.countProductsUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
