import { RenewLicenseRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Payment_I } from "../../../../entities/Payment";

export class RenewLicenseImplementation
  extends PrismaCore
  implements RenewLicenseRepository_I
{
  async create(data: Omit<Payment_I, "id">): Promise<void> {
    try {
      await this.prismaClient.payments.create({ data });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async update(userId: number, new_due_date: Date): Promise<void> {
    try {
      await this.prismaClient.users.update({
        data: { due_date: new_due_date },
        where: { id: userId },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async getInfo(id: number): Promise<{ due_date: Date | null } | null> {
    try {
      const data = await this.prismaClient.users.findUnique({
        where: { id },
        select: { due_date: true },
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
