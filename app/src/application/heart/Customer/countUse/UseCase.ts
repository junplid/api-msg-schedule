import { CountCustomerOfUserRepository_I } from "./Repository";
import { CountCustomerOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountCustomerOfUserUseCase {
  constructor(private countCustomerOfUser: CountCustomerOfUserRepository_I) {}

  async run({
    page,
    amount,
    ...dto
  }: CountCustomerOfUserDTO_I & { userId: number }): Promise<RunUseCase_I> {
    const amounts = amount !== undefined ? Number(amount) : 20;
    const pages = page ? Number(page) * amounts : 0;

    const data = await this.countCustomerOfUser.get({
      ...dto,
      skip: pages,
      amount: amounts,
    });

    return { message: "OK", data };
  }
}
