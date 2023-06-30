import {
  CountCustomerOfUserRepository_I,
  propsGet_I,
  resultCount_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CountCustomerOfUserImplementation
  extends PrismaCore
  implements CountCustomerOfUserRepository_I
{
  async get(props: propsGet_I): Promise<number> {
    try {
      const datas = await this.prismaClient.customers.count({
        orderBy: { id: "desc" },
        where: {
          userId: props.userId,
          dueDate: { lt: props.beforeDate, gt: props.afterDate },
          full_name: { contains: props.name },
          whatsapp: props.whatsapp,
          login: props.login,
          invoice: props.invoice,
          planId: props.planId,
          productId: props.productId,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
