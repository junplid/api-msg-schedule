import { UpdatePaymentRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Payment_I } from "../../../../entities/Payment";

export class UpdatePaymentImplementation
  extends PrismaCore
  implements UpdatePaymentRepository_I
{
  async updatePayment(data: Payment_I): Promise<number> {
    try {
      const datas = await this.prismaClient.payments.update({
        data,
        where: { id: data.id },
      });
      return datas.id;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async updateAmountUser(data: {
    valueaction: number;
    userId: number;
  }): Promise<void> {
    try {
      await this.prismaClient.users.update({
        data: { amount: { increment: data.valueaction } },
        where: { id: data.userId },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
