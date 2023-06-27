import { CountSubscribersRootRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountSubscribersRootImplementation
  extends PrismaCore
  implements CountSubscribersRootRepository_I
{
  async get(): Promise<number> {
    try {
      const datas = await this.prismaClient.customers.count();
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
