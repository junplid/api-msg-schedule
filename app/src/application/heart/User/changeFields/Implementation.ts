import { ChangeFieldsUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { ChangeFieldsUserDTO_I } from "./DTO";

export class ChangeFieldsUserImplementation
  extends PrismaCore
  implements ChangeFieldsUserRepository_I
{
  async update(data: ChangeFieldsUserDTO_I, id: number): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
