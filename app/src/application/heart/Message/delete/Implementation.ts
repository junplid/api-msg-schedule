import { DellMessageOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Message_I } from "../../../../entities/Message";

export class DellMessageOfUserImplementation
  extends PrismaCore
  implements DellMessageOfUserRepository_I
{
  async dell(user_key: string, id: number): Promise<void> {
    try {
      await this.prismaClient.messages.delete({
        where: {
          user_key,
          id,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
