import {
  ConfirmCodeRepository_I,
  propsInfoUser_I,
  propsSend_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ConfirmCodeImplementation
  extends PrismaCore
  implements ConfirmCodeRepository_I
{
  async getInfoUser(props: propsSend_I): Promise<propsInfoUser_I | null> {
    try {
      const userRoot = await this.prismaClient.users.findUnique({
        where: { whatsapp: props.whatsapp },
        select: { code: true, id: true, type: true },
      });
      return userRoot;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
