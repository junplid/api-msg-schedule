import { CreateUserRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { User_I } from "../../../../entities/User";

export class CreateUserImplementation
  extends PrismaCore
  implements CreateUserRepository_I
{
  async create(data: Omit<User_I, "id">): Promise<void> {
    try {
      await this.prismaClient.users.create({ data });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
