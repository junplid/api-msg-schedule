import {
  ListCustomerOfUserRepository_I,
  propsGet_I,
  resultList_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ListCustomerOfUserImplementation
  extends PrismaCore
  implements ListCustomerOfUserRepository_I
{
  async get(props: propsGet_I): Promise<resultList_I[]> {
    try {
      const datas = await this.prismaClient.customers.findMany({
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
        select: {
          id: true,
          product: {
            select: { name: true, price: true },
          },
          plan: {
            select: { name: true, price: true },
          },
          productId: true,
          planId: true,
          comments: true,
          dueDate: true,
          full_name: true,
          invoice: true,
          login: true,
          password: true,
          whatsapp: true,
          message: {
            select: {
              message: {
                select: {
                  id: true,
                  days: true,
                },
              },
            },
          },
        },
        take: props.amount,
        skip: props.skip,
      });
      return datas?.map((cust) => {
        return {
          comments: cust.comments,
          dueDate: cust.dueDate,
          full_name: cust.full_name,
          id: cust.id,
          invoice: cust.invoice,
          login: cust.login,
          plan: cust.plan,
          product: cust.product,
          password: cust.password,
          planId: cust.planId,
          productId: cust.productId,
          whatsapp: cust.whatsapp,
          message: cust.message,
        };
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
