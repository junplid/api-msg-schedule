import { ListCustomerOfUserRepository_I, resultList_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ListCustomerOfUserImplementation
  extends PrismaCore
  implements ListCustomerOfUserRepository_I
{
  async get(userId: number): Promise<resultList_I[]> {
    try {
      const datas = await this.prismaClient.customers.findMany({
        include: {
          product: { select: { name: true } },
          plan: { select: { name: true } },
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
