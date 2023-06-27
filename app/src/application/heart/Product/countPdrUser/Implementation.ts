import { CountProductsUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountProductsUserImplementation
  extends PrismaCore
  implements CountProductsUserRepository_I
{
  async get(): Promise<number> {
    try {
      const datas = await this.prismaClient.products.count();
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
