import { ChangeFieldsMessageRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { ChangeFieldsMessageDTO_I } from "./DTO";

export class ChangeFieldsMessageImplementation
  extends PrismaCore
  implements ChangeFieldsMessageRepository_I
{
  async update(
    data: Omit<ChangeFieldsMessageDTO_I, "user_key">,
    user_key: string
  ): Promise<void> {
    try {
      await this.prismaClient.messages.update({
        where: { user_key },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
