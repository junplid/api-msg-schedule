import { ListCustomerOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Customer } from "../../../../entities/Customer";

export class ListCustomerOfUserImplementation
  extends PrismaCore
  implements ListCustomerOfUserRepository_I
{
  async get(userId: number): Promise<Omit<Customer, "userId">[]> {
    try {
      const datas = await this.prismaClient.customers.findMany({
        include: {
          message: {
            select: { message: { select: { days: true, id: true } } },
          },
        },
        where: { userId },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
