import { CountPlansRepository_I } from "./Repository";
import { CountPlansDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountPlansUseCase {
  constructor(private countPlans: CountPlansRepository_I) {}

  async run(dto: CountPlansDTO_I): Promise<RunUseCase_I> {
    const data = await this.countPlans.get();

    return {
      message: "OK",
      data,
    };
  }
}
