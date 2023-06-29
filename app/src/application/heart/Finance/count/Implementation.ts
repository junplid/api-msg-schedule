import { CountFinanceOfUserRepository_I, propsGet_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountFinanceOfUserImplementation
  extends PrismaCore
  implements CountFinanceOfUserRepository_I
{
  async get(userId: number, filter: propsGet_I): Promise<number> {
    try {
      const datas = await this.prismaClient.payments.count({
        where: {
          userId: userId,
          name: { contains: filter.search },
          payday: { lt: filter.beforeDate, gt: filter.afterDate },
          type_transation: filter.type_transation,
        },
        take: filter.amount,
        skip: filter.skip,
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
