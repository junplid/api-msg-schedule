import {
  ListFinanceOfUserRepository_I,
  propsGet_I,
  resultList_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ListFinanceOfUserImplementation
  extends PrismaCore
  implements ListFinanceOfUserRepository_I
{
  async getUser(userId: number): Promise<string | null> {
    try {
      const datas = await this.prismaClient.users.findUnique({
        where: {
          id: userId,
        },
        select: {
          type: true,
        },
      });
      return datas?.type ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async get(props: propsGet_I): Promise<resultList_I[]> {
    try {
      console.log(props);
      const datas = await this.prismaClient.payments.findMany({
        orderBy: { id: "desc" },
        where: {
          userId: props.userId,
          name: { contains: props.search },
          payday: { lt: props.beforeDate, gt: props.afterDate },
          type_transation: props.type_transation,
        },
        select: {
          id: true,
          payday: true,
          type_transation: true,
          price: true,
          name: true,
        },
        take: props.amount,
        skip: props.skip,
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
