import { CountProductsRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountProductsImplementation
  extends PrismaCore
  implements CountProductsRepository_I
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
