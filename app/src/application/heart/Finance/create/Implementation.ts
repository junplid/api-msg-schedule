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
}
