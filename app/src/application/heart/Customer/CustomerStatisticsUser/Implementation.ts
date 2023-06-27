import { CustomerStatisticsUserRepository_I, result_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CustomerStatisticsUserImplementation
  extends PrismaCore
  implements CustomerStatisticsUserRepository_I
{
  async get(userId: number): Promise<result_I[]> {
    try {
      const datas = await this.prismaClient.customers.findMany({
        orderBy: { createAt: "asc" },
        where: { userId },
        select: {
          id: true,
          createAt: true,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
