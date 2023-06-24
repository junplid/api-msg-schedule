import { ListCustomerOfUserRepository_I } from "./Repository";
import { ListCustomerOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListCustomerOfUserUseCase {
  constructor(private listCustomerOfUser: ListCustomerOfUserRepository_I) {}

  async run(dto: ListCustomerOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.listCustomerOfUser.get(dto.userId);

    const newData = data.map((dt) => ({
      ...dt,
      value_plan: dt.plan.name,
      value_product: dt.product.name,
      product: undefined,
      plan: undefined,
      messageId: dt.message.map((ms) => ms.message.id),
      message: undefined,
    }));

    return {
      message: "OK",
      data: newData,
    };
  }
}
