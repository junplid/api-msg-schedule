import { RenewCustomerRepository_I, resultFind_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Payment_I } from "../../../../entities/Payment";

export class RenewCustomerImplementation
  extends PrismaCore
  implements RenewCustomerRepository_I
{
  async findCust(customerId: number): Promise<resultFind_I | null> {
    try {
      const data = await this.prismaClient.customers.findUnique({
        where: { id: customerId },
        select: {
          userId: true,
          full_name: true,
          login: true,
          whatsapp: true,
          comments: true,
          plan: {
            select: { price: true, name: true },
          },
          password: true,
          product: {
            select: { price: true, name: true },
          },
          dueDate: true,
        },
      });
      return data
        ? {
            dueDate: data.dueDate,
            comments: data.comments,
            password: data.password,
            expense: data.product!.price,
            profit: Math.abs(
              Number(data.plan!.price) - Number(data.product!.price)
            ),
            sale: data.product!.price,
            userId: data.userId,
            name: data.product!.name,
            login: data.login,
            full_name: data.full_name,
            whatsapp: data.whatsapp,
            plan: data.plan,
            product: data.product,
          }
        : null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async updateDueDate(customerId: number, newDate: Date): Promise<void> {
    try {
      await this.prismaClient.customers.update({
        where: { id: customerId },
        data: { dueDate: newDate },
      });
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
        where: { id: userId },
        data: { amount: { increment: vl } },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
