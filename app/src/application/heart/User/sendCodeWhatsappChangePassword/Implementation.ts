import {
  SendCodeWhatsappChangePasswordRepository_I,
  propsInfoRoot_I,
  propsSend_I,
  propsUpdate_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { User_I } from "../../../../entities/User";
import { storeSessions } from "../../../../sessionsStore";

export class SendCodeWhatsappChangePasswordImplementation
  extends PrismaCore
  implements SendCodeWhatsappChangePasswordRepository_I
{
  async getInfoRoot(): Promise<propsInfoRoot_I | null> {
    try {
      const userRoot = await this.prismaClient.users.findFirst({
        where: { type: "root" },
        select: { id: true },
      });

      return userRoot;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async getInfoWhatsAppUser(whatsapp: string): Promise<boolean> {
    try {
      return !!(await this.prismaClient.users.count({ where: { whatsapp } }));
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async sendCodeWhatsApp(props: propsSend_I): Promise<boolean> {
    try {
      await storeSessions[props.rootId]?.sendText(
        `55${props.whatsapp}@c.us`,
        `Seu código para trocar a senha é:
*${props.code}*. Para sua segurança,
Não o compartilhe.`
      );
      return true;
    } catch (error) {
      throw new Error("Error ao tentar enviar mensagem.");
    }
  }
  async updateCodeUser(props: propsUpdate_I): Promise<void> {
    try {
      await this.prismaClient.users.update({
        where: { whatsapp: props.whatsapp },
        data: { code: props.code },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
