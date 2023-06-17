import { CreateSessionWhatsappRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { User_I } from "../../../../entities/User";

export class CreateSessionWhatsappImplementation
  extends PrismaCore
  implements CreateSessionWhatsappRepository_I
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
