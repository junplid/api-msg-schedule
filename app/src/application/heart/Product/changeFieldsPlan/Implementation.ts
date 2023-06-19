import {
  ChangeFieldsPlanProductRepository_I,
  propsDataUpdate_I,
  resultfind_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ChangeFieldsPlanProductImplementation
  extends PrismaCore
  implements ChangeFieldsPlanProductRepository_I
{
  async update({ id, productId, ...data }: propsDataUpdate_I): Promise<void> {
    try {
      await this.prismaClient.plans.upsert({
        where: { id },
        create: { name: data.name!, price: data.price!, productId },
        update: data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findPlan(id: number): Promise<resultfind_I | null> {
    try {
      const data = await this.prismaClient.plans.findUnique({
        where: { id },
        select: { product: { select: { userId: true, id: true } } },
      });
      return data?.product
        ? { productId: data.product.id, userId: data.product.userId }
        : null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
