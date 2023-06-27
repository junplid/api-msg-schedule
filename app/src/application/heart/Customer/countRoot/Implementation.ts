import { CountCustomerRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountCustomerImplementation
  extends PrismaCore
  implements CountCustomerRepository_I
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
