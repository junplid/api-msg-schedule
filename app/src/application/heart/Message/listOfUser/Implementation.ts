import { ListMessageOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Message_I } from "../../../../entities/Message";

export class ListMessageOfUserImplementation
  extends PrismaCore
  implements ListMessageOfUserRepository_I
{
  async get(userId: number): Promise<Omit<Message_I, "userId">[]> {
    try {
      const datas = await this.prismaClient.messages.findMany({
        select: { days: true, id: true, text: true },
        where: {
          userId,
        },
      });
      return datas;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
