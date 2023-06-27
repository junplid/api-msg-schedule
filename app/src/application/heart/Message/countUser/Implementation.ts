import { CountMessageUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountMessageUserImplementation
  extends PrismaCore
  implements CountMessageUserRepository_I
{
  async get(userId: number): Promise<number> {
    try {
      const datas = await this.prismaClient.messages.count({
        where: { userId },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
