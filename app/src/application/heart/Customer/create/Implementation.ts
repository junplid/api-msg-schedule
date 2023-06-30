import { CreateCustomerRepository_I, propsCreateCData_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Decimal } from "@prisma/client/runtime";
import { Payment_I } from "../../../../entities/Payment";

export class CreateCustomerImplementation
  extends PrismaCore
  implements CreateCustomerRepository_I
{
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
  async createCustomer(props: propsCreateCData_I): Promise<number> {
    try {
      const data = await this.prismaClient.customers.create({
        data: props,
        select: { id: true },
      });
      return data.id;
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
  async sumAmount(userId: number, vl: number): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: {id: userId},
        data: { amount: { increment: vl } }
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
