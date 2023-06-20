import { CreateCustomerRepository_I } from "./Repository";
import { CreateCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CreateCustomerUseCase {
  constructor(private createCustomer: CreateCustomerRepository_I) {}

  async run(dto: CreateCustomerDTO_I): Promise<RunUseCase_I> {
    const dd = { ...dto, messageId: undefined };
    const customerId = await this.createCustomer.createCustomer(dd);

    await Promise.all(
      dto.messageId.map(async (msgId) => {
        await this.createCustomer.createCustomerMessage(customerId, msgId);
      })
    );

    return {
      message: "OK",
      data: customerId,
    };
  }
}
