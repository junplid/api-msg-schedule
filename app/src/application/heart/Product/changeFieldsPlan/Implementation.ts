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
  async update({
    productId,
    idPlan,
    ...data
  }: propsDataUpdate_I): Promise<number> {
    try {
      const datas = await this.prismaClient.plans.upsert({
        where: { id: idPlan ?? 0 },
        create: { name: data.name!, price: data.price!, productId },
        update: data,
        select: { id: true },
      });
      return datas.id;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async productExist(productId: number): Promise<resultfind_I | null> {
    try {
      const data = await this.prismaClient.products.findUnique({
        where: { id: productId },
        select: { userId: true },
      });
      return data ? { userId: data.userId } : null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
