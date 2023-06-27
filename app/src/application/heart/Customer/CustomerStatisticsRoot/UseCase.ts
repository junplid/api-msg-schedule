import { CustomerStatisticsRootRepository_I } from "./Repository";
import { CustomerStatisticsRootDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CustomerStatisticsRootUseCase {
  constructor(
    private customerStatisticsRoot: CustomerStatisticsRootRepository_I
  ) {}

  async run(dto: CustomerStatisticsRootDTO_I): Promise<RunUseCase_I> {
    const data = await this.customerStatisticsRoot.get();

    return {
      message: "OK",
      data,
    };
  }
}
