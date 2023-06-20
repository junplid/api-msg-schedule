import { DellCustomerOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class DellCustomerOfUserImplementation
  extends PrismaCore
  implements DellCustomerOfUserRepository_I
{
  async dell(id: number): Promise<void> {
    try {
      await this.prismaClient.customers.delete({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findMsg(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.customers.findUnique({
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
