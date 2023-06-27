import { StatisticRepository_I } from "./Repository";
import { StatisticDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class StatisticUseCase {
  constructor(private statistic: StatisticRepository_I) {}

  async run(dto: StatisticDTO_I): Promise<RunUseCase_I> {
    const data = await this.statistic.get();

    return {
      message: "OK",
      data,
    };
  }
}
