import { ListCustomerOfUserRepository_I } from "./Repository";
import { ListCustomerOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListCustomerOfUserUseCase {
  constructor(private listCustomerOfUser: ListCustomerOfUserRepository_I) {}

  async run({
    page,
    amount,
    ...dto
  }: ListCustomerOfUserDTO_I & { userId: number }): Promise<RunUseCase_I> {
    const amounts = amount !== undefined ? Number(amount) : 20;
    const pages = page ? Number(page) * amounts : 0;

    const data = await this.listCustomerOfUser.get({
      ...dto,
      skip: pages,
      amount: amounts,
      ...(dto.planId && { planId: Number(dto.planId) }),
      ...(dto.productId && { productId: Number(dto.productId) }),
      ...(dto.afterDate && { afterDate: new Date(dto.afterDate) }),
      ...(dto.beforeDate && { beforeDate: new Date(dto.beforeDate) }),
    });

    const newData = data.map((dt) => ({
      ...dt,
      value_plan: `${dt?.plan?.name} - R$${dt.plan?.price}`,
      value_product: `${dt?.product?.name} - R$${dt.product?.price}`,
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
