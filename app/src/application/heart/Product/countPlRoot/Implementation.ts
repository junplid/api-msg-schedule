import { CountPlansRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountPlansImplementation
  extends PrismaCore
  implements CountPlansRepository_I
{
  async get(): Promise<number> {
    try {
      const datas = await this.prismaClient.plans.count();
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
