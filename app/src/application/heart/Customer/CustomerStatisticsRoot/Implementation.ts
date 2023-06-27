import { CustomerStatisticsRootRepository_I, result_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CustomerStatisticsRootImplementation
  extends PrismaCore
  implements CustomerStatisticsRootRepository_I
{
  async get(): Promise<result_I[]> {
    try {
      const datas = await this.prismaClient.customers.findMany({
        orderBy: { createAt: "asc" },
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
