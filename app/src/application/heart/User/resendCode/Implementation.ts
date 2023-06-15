import { ResendCodeRepository_I, resultGetInfo_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { User_I } from "../../../../entities/User";

export class ResendCodeImplementation
  extends PrismaCore
  implements ResendCodeRepository_I
{
  async getInfo(keyuser: string): Promise<resultGetInfo_I | null> {
    try {
      const data = await this.prismaClient.users.findUnique({
        where: { key: keyuser },
        select: { code: true, available: true, email: true },
      });
      return data;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
