import { ChangeCustomerFieldsRepository_I, propsUpdate_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Payment_I } from "../../../../entities/Payment";
import { Decimal } from "@prisma/client/runtime";

export class ChangeCustomerFieldsImplementation
  extends PrismaCore
  implements ChangeCustomerFieldsRepository_I
{
  async update({ id, messageId, ...props }: propsUpdate_I): Promise<void> {
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

  async createCustomerMessage(
    customerId: number,
    messageId: number
  ): Promise<void> {
    try {
      await this.prismaClient.messagesOnCustomer.create({
        data: { customerId, messageId },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async deleteAllMsg(id: number): Promise<void> {
    try {
      await this.prismaClient.messagesOnCustomer.deleteMany({
        where: { customerId: id },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async findProduct(
    pdrId: number
  ): Promise<{ price: number | Decimal; name: string } | null> {
    try {
      const data = await this.prismaClient.products.findUnique({
        where: { id: pdrId },
        select: { price: true, name: true },
      });
      return data ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findPlan(planId: number): Promise<number | Decimal | null> {
    try {
      const data = await this.prismaClient.plans.findUnique({
        where: { id: planId },
        select: { price: true },
      });
      return data?.price ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async createPayment(data: Payment_I): Promise<void> {
    try {
      await this.prismaClient.payments.create({ data });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async findCust(id: number): Promise<{
    invoice: string | null;
    userId: number;
    full_name: string;
    login: string | null;
  } | null> {
    try {
      const data = await this.prismaClient.customers.findUnique({
        where: { id },
        select: { userId: true, invoice: true, full_name: true, login: true },
      });
      return data ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
