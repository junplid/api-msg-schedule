import { ListCustomerOfUserRepository_I } from "./Repository";
import { ListCustomerOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { Customer } from "../../../../entities/Customer";

interface resultUse extends Omit<Customer, "userId"> {
  value_product: string;
  value_plan: string;
  plan: undefined;
  product: undefined;
}

export class ListCustomerOfUserUseCase {
  constructor(private listCustomerOfUser: ListCustomerOfUserRepository_I) {}

  async run(dto: ListCustomerOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.listCustomerOfUser.get(dto.userId);

    const newData = data.map(
      (dt): resultUse => ({
        ...dt,
        value_plan: dt.plan.name,
        value_product: dt.product.name,
        product: undefined,
        plan: undefined,
      })
    );

    return {
      message: "OK",
      data: newData,
    };
  }
}
