import {
  SendMessageCustomerRepository_I,
  propsUpdate_I,
  result_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class SendMessageCustomerImplementation
  extends PrismaCore
  implements SendMessageCustomerRepository_I
{
  async update({ id, ...props }: propsUpdate_I): Promise<void> {
    try {
      await this.prismaClient.customers.update({
        where: { id },
        data: props,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async findCust(id: number): Promise<result_I | null> {
    try {
      const data = await this.prismaClient.customers.findUnique({
        where: { id },
        select: {
          userId: true,
          whatsapp: true,
          full_name: true,
          comments: true,
          dueDate: true,
          login: true,
          password: true,
          product: { select: { name: true } },
          plan: { select: { name: true } },
        },
      });
      return data ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
