import { ChangeFieldsMessageRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { ChangeFieldsMessageDTO_I } from "./DTO";

export class ChangeFieldsMessageImplementation
  extends PrismaCore
  implements ChangeFieldsMessageRepository_I
{
  async update({
    id,
    ...data
  }: Omit<
    ChangeFieldsMessageDTO_I & { id: number; days: number },
    "user_key"
  >): Promise<void> {
    try {
      await this.prismaClient.messages.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findMsg(id: number): Promise<string | null> {
    try {
      const data = await this.prismaClient.messages.findUnique({
        where: { id },
        select: { user_key: true },
      });
      return data?.user_key ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
