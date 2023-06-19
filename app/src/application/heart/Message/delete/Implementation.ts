import { DellMessageOfUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { Message_I } from "../../../../entities/Message";

export class DellMessageOfUserImplementation
  extends PrismaCore
  implements DellMessageOfUserRepository_I
{
  async dell(id: number): Promise<void> {
    try {
      await this.prismaClient.messages.delete({
        where: {
          id,
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findMsg(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.messages.findUnique({
        where: { id },
        select: { userId: true },
      });
      return data?.userId ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
