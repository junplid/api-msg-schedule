import { DellProductOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class DellProductOfUserImplementation
  extends PrismaCore
  implements DellProductOfUserRepository_I
{
  async dell(id: number): Promise<void> {
    try {
      await this.prismaClient.products.delete({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findMsg(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.products.findUnique({
        where: { id },
        select: { userId: true },
      });
      return data?.userId ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
