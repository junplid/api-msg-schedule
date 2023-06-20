import { ListCustomerOfUserRepository_I } from "./Repository";
import { ListCustomerOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListCustomerOfUserUseCase {
  constructor(private listCustomerOfUser: ListCustomerOfUserRepository_I) {}

  async run(dto: ListCustomerOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.listCustomerOfUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
