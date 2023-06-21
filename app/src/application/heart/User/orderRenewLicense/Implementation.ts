import { OrderRenewLicenseRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { User_I } from "../../../../entities/User";

export class OrderRenewLicenseImplementation
  extends PrismaCore
  implements OrderRenewLicenseRepository_I
{
  async create(data: Omit<User_I, "id">): Promise<void> {
    try {
      await this.prismaClient.users.create({ data });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async getInfo(id: number): Promise<{ email: string } | null> {
    try {
      const data = await this.prismaClient.users.findUnique({
        where: { id },
        select: { email: true },
      });

      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
