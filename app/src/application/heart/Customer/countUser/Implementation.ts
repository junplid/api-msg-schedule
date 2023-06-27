import { CountCustomerUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountCustomerUserImplementation
  extends PrismaCore
  implements CountCustomerUserRepository_I
{
  async get(userId: number): Promise<number> {
    try {
      const datas = await this.prismaClient.customers.count({
        where: { userId },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
