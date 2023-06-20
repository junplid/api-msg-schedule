import { CreateCustomerRepository_I } from "./Repository";
import { CreateCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CreateCustomerUseCase {
  constructor(private createCustomer: CreateCustomerRepository_I) {}

  async run(dto: CreateCustomerDTO_I): Promise<RunUseCase_I> {
    const data = await this.createCustomer.create(dto);

    return {
      message: "OK",
      data,
    };
  }
}
