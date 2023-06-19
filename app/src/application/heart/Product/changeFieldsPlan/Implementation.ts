import {
  ChangeFieldsPlanProductRepository_I,
  propsDataUpdate_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ChangeFieldsPlanProductImplementation
  extends PrismaCore
  implements ChangeFieldsPlanProductRepository_I
{
  async update({ id, ...data }: propsDataUpdate_I): Promise<void> {
    try {
      await this.prismaClient.plans.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findPlan(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.plans.findUnique({
        where: { id },
        select: { product: { select: { userId: true } } },
      });
      return data?.product.userId ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
