import { CountFinanceOfUserRepository_I } from "./Repository";
import { CountFinanceOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountFinanceOfUserUseCase {
  constructor(private countFinanceOfUser: CountFinanceOfUserRepository_I) {}

  async run(
    dto: CountFinanceOfUserDTO_I & { userId: number }
  ): Promise<RunUseCase_I> {
    const amount = dto.amount !== undefined ? Number(dto.amount) : 20;
    const page = dto?.page ? Number(dto?.page) * amount : 0;

    const data = await this.countFinanceOfUser.get(dto.userId, {
      amount,
      skip: page,
      userId: dto.userId,
      search: dto.search,
      ...(dto.afterDate && { afterDate: new Date(dto.afterDate) }),
      ...(dto.beforeDate && { beforeDate: new Date(dto.beforeDate) }),
      type_transation: dto.type_transation,
    });

    return {
      message: "OK",
      data,
    };
  }
}
