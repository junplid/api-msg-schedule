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
          plan: {
            select: { price: true },
          },
          product: {
            select: { price: true, name: true },
          },
        },
      });
      return data
        ? {
            expense: data.product!.price,
            profit: Math.abs(
              Number(data.plan!.price) - Number(data.product!.price)
            ),
            sale: data.product!.price,
            userId: data.userId,
            name: data.product!.name,
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
}
