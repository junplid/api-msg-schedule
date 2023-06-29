import { ListFinanceOfUserRepository_I } from "./Repository";
import { ListFinanceOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListFinanceOfUserUseCase {
  constructor(private listFinanceOfUser: ListFinanceOfUserRepository_I) {}

  async run(
    dto: ListFinanceOfUserDTO_I & { userId: number }
  ): Promise<RunUseCase_I> {
    const usernivel = await this.listFinanceOfUser.getUser(dto.userId);

    if (!usernivel) {
      throw {
        message: "Não autorizado",
        statusCode: 401,
        details: {
          body: [{ message: "Não autorizado" }],
        },
        error: "Não autorizado",
        name: "not authorization",
      };
    }

    const amount = dto.amount !== undefined ? Number(dto.amount) : 20;
    const page = dto?.page ? Number(dto?.page) * amount : 0;

    const data = await this.listFinanceOfUser.get({
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
