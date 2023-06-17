import { CreateMessageRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Message_I } from "../../../../entities/Message";

export class CreateMessageImplementation
  extends PrismaCore
  implements CreateMessageRepository_I
{
  async create(data: Omit<Message_I, "id">): Promise<number> {
    try {
      const datas = await this.prismaClient.messages.create({
        data,
        select: { id: true },
      });
      return datas.id;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
