import { StatisticFinanceCustomersRepository_I, result_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class StatisticFinanceCustomersImplementation
  extends PrismaCore
  implements StatisticFinanceCustomersRepository_I
{
  async get(userId: number): Promise<result_I[]> {
    try {
      const datas = await this.prismaClient.payments.findMany({
        orderBy: { payday: "asc" },
        where: { type: "user", userId },
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
