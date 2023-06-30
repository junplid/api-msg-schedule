import { CreatePaymentRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Payment_I } from "../../../../entities/Payment";

export class CreatePaymentImplementation
  extends PrismaCore
  implements CreatePaymentRepository_I
{
  async createPayment(data: Payment_I): Promise<number> {
    try {
      const datas = await this.prismaClient.payments.create({
        data,
        select: { id: true },
      });
      return datas.id;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async sumAmount(
    userId: number,
    incre?: number,
    decre?: number
  ): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: { id: userId },
        data: { amount: { increment: incre, decrement: decre } },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
