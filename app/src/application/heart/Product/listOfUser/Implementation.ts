import { ListProductOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Product } from "../../../../entities/Product";

export class ListProductOfUserImplementation
  extends PrismaCore
  implements ListProductOfUserRepository_I
{
  async get(userId: number): Promise<Omit<Product, "userId">[]> {
    try {
      const datas = await this.prismaClient.products.findMany({
        where: { userId },
        include: { plan: true },
      });
      return datas.map((e) => {
        return { ...e, plans: e.plan, userId: undefined };
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
