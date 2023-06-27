import { StatisticRepository_I, result_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class StatisticImplementation
  extends PrismaCore
  implements StatisticRepository_I
{
  async get(): Promise<result_I[]> {
    try {
      const datas = await this.prismaClient.users.findMany({
        orderBy: { createAt: "asc" },
        where: {
          NOT: {
            type: "root",
          },
        },
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
