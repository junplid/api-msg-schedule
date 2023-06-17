import { ListMessageOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Message_I } from "../../../../entities/Message";

export class ListMessageOfUserImplementation
  extends PrismaCore
  implements ListMessageOfUserRepository_I
{
  async get(user_key: string): Promise<Omit<Message_I, "user_key">[]> {
    try {
      const datas = await this.prismaClient.messages.findMany({
        select: { days: true, id: true, text: true },
        where: {
          user_key,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
