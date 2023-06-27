import { CustomerStatisticsUserRepository_I } from "./Repository";
import { CustomerStatisticsUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CustomerStatisticsUserUseCase {
  constructor(
    private customerStatisticsUser: CustomerStatisticsUserRepository_I
  ) {}

  async run(dto: CustomerStatisticsUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.customerStatisticsUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
