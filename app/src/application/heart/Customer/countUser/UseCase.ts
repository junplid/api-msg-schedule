import { CountCustomerUserRepository_I } from "./Repository";
import { CountCustomerUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountCustomerUserUseCase {
  constructor(private countCustomerUser: CountCustomerUserRepository_I) {}

  async run(dto: CountCustomerUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.countCustomerUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
