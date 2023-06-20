import { ListOnlyProductOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Product } from "../../../../entities/Product";

export class ListOnlyProductOfUserImplementation
  extends PrismaCore
  implements ListOnlyProductOfUserRepository_I
{
  async get(userId: number): Promise<Omit<Product, "userId" | "plans">[]> {
    try {
      const datas = await this.prismaClient.products.findMany({
        where: { userId },
        select: {
          userId: true,
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
