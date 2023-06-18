import {
  CreateProductRepository_I,
  propsCreatePData_I,
  result_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CreateProductImplementation
  extends PrismaCore
  implements CreateProductRepository_I
{
  async create(props: propsCreatePData_I): Promise<result_I> {
    try {
      const data = await this.prismaClient.products.create({
        data: {
          name: props.name,
          price: props.price,
          user_key: props.user_key,
          plan: {
            create: props.plans,
          },
        },
        select: {
          id: true,
          plan: { select: { name: true, id: true } },
        },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
