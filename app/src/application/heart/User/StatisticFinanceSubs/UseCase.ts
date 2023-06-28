import { StatisticFinanceSubsRepository_I } from "./Repository";
import { StatisticFinanceSubsDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class StatisticFinanceSubsUseCase {
  constructor(private statisticFinanceSubs: StatisticFinanceSubsRepository_I) {}

  async run(dto: StatisticFinanceSubsDTO_I): Promise<RunUseCase_I> {
    const data = await this.statisticFinanceSubs.get();
    return { message: "OK", data };
  }
}
