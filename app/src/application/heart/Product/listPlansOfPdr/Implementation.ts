import { ListPlansOfPdrRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Plans } from "../../../../entities/Product";

export class ListPlansOfPdrImplementation
  extends PrismaCore
  implements ListPlansOfPdrRepository_I
{
  async get(productId: number): Promise<Omit<Plans, "productId">[]> {
    try {
      const datas = await this.prismaClient.plans.findMany({
        where: { productId },
        select: {
          id: true,
          name: true,
          price: true,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
