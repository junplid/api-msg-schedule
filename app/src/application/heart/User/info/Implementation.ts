import { InfoUserRepository_I, result_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class InfoUserImplementation
  extends PrismaCore
  implements InfoUserRepository_I
{
  async get(userId: number): Promise<result_I | null> {
    try {
      const datas = await this.prismaClient.users.findUnique({
        where: { id: userId },
        select: {
          email: true,
          full_name: true,
          whatsapp: true,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
