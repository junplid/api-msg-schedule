import { ListProductOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Product } from "../../../../entities/Product";

export class ListProductOfUserImplementation
  extends PrismaCore
  implements ListProductOfUserRepository_I
{
  async get(user_key: string): Promise<Omit<Product, "user_key">[]> {
    try {
      const datas = await this.prismaClient.products.findMany({
        where: { user_key },
        include: { plan: true },
      });
      return datas.map((e) => {
        return { ...e, plans: e.plan, user_key: undefined };
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
