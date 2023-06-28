import { StatisticFinanceSubsRepository_I, result_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class StatisticFinanceSubsImplementation
  extends PrismaCore
  implements StatisticFinanceSubsRepository_I
{
  async get(): Promise<result_I[]> {
    try {
      const datas = await this.prismaClient.payments.findMany({
        orderBy: { payday: "asc" },
        where: { type: "root" },
        select: {
          id: true,
          payday: true,
          price: true,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
