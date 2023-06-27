import { CountPlansUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountPlansUserImplementation
  extends PrismaCore
  implements CountPlansUserRepository_I
{
  async get(userId: number): Promise<number> {
    try {
      const datas = await this.prismaClient.plans.count({
        where: { product: { userId } },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
