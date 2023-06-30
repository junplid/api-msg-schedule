import { DellPaymentOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Decimal } from "@prisma/client/runtime";

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
  async findPay(id: number): Promise<{
    userId: number;
    price: Decimal;
    type_transation: string | "PROHIBITED" | "EXIT";
  } | null> {
    try {
      const data = await this.prismaClient.payments.findUnique({
        where: { id },
        select: { userId: true, price: true, type_transation: true },
      });
      return data ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async decAmount(userId: number, vl: number): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: { id: userId },
        data: { amount: { increment: vl } },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
