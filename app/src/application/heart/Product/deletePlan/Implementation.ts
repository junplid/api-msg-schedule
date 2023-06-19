import { DellPlanOfProductRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class DellPlanOfProductImplementation
  extends PrismaCore
  implements DellPlanOfProductRepository_I
{
  async dell(id: number): Promise<void> {
    try {
      await this.prismaClient.plans.delete({
        where: { id },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findPdr(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.plans.findFirst({
        where: { id },
        select: { product: { select: { userId: true } } },
      });
      return data?.product?.userId ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
