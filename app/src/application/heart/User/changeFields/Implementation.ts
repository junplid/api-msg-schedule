import { ChangeFieldsUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { ChangeFieldsUserDTO_I } from "./DTO";

export class ChangeFieldsUserImplementation
  extends PrismaCore
  implements ChangeFieldsUserRepository_I
{
  async update(data: ChangeFieldsUserDTO_I, key: string): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: { key },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
