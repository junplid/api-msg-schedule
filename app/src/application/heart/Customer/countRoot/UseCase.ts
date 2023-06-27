import { CountCustomerRepository_I } from "./Repository";
import { CountCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountCustomerUseCase {
  constructor(private countCustomer: CountCustomerRepository_I) {}

  async run(dto: CountCustomerDTO_I): Promise<RunUseCase_I> {
    const data = await this.countCustomer.get();

    return {
      message: "OK",
      data,
    };
  }
}
