import { DellPaymentOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class DellPaymentOfUserImplementation
  extends PrismaCore
  implements DellPaymentOfUserRepository_I
{
  async dell(id: number): Promise<void> {
    try {
      await this.prismaClient.payments.delete({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findPay(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.payments.findUnique({
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
