import { GetBalanceOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class GetBalanceOfUserImplementation
  extends PrismaCore
  implements GetBalanceOfUserRepository_I
{
  async get(userId: number): Promise<number> {
    try {
      const datas = await this.prismaClient.users.findFirst({
        where: {
          id: userId,
        },
        select: { amount: true },
      });
      return datas?.amount ? Number(datas.amount) : 0;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
