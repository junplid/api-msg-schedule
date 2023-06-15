import { ConfirmCodeRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ConfirmCodeImplementation
  extends PrismaCore
  implements ConfirmCodeRepository_I
{
  async getInfo(keyUser: string): Promise<{
    code?: string | null;
    available: number | null;
  } | null> {
    try {
      const code = await this.prismaClient.users.findFirst({
        where: { key: keyUser },
        select: { code: true, available: true },
      });
      return code ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async updateAvaillable(key: string): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: { key },
        data: { available: 1 },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
