import { StatisticFinanceCustomersRepository_I } from "./Repository";
import { StatisticFinanceCustomersDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class StatisticFinanceCustomersUseCase {
  constructor(
    private statisticFinanceCustomers: StatisticFinanceCustomersRepository_I
  ) {}

  async run(dto: StatisticFinanceCustomersDTO_I): Promise<RunUseCase_I> {
    const data = await this.statisticFinanceCustomers.get(dto.userId);
    return { message: "OK", data };
  }
}
