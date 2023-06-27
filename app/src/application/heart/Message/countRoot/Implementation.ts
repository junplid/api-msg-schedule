import { CountMessageRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountMessageImplementation
  extends PrismaCore
  implements CountMessageRepository_I
{
  async get(): Promise<number> {
    try {
      const datas = await this.prismaClient.messages.count();
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
