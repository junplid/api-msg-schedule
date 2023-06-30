import { GetBalanceOfUserRepository_I } from "./Repository";
import { GetBalanceOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class GetBalanceOfUserUseCase {
  constructor(private getBalanceOfUser: GetBalanceOfUserRepository_I) {}

  async run(dto: GetBalanceOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.getBalanceOfUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
