import { SendCodeWhatsappChangePasswordRepository_I } from "./Repository";
import { SendCodeWhatsappChangePasswordDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class SendCodeWhatsappChangePasswordUseCase {
  constructor(
    private sendCodeWhatsappChangePassword: SendCodeWhatsappChangePasswordRepository_I
  ) {}

  async run(dto: SendCodeWhatsappChangePasswordDTO_I): Promise<RunUseCase_I> {
    const whatsappExist =
      await this.sendCodeWhatsappChangePassword.getInfoWhatsAppUser(
        dto.whatsapp
      );

    if (!whatsappExist) {
      throw {
        message: "WhatsApp não cadastrado.",
        statusCode: 422,
        details: {
          body: [
            {
              message: "WhatsApp não cadastrado.",
              context: {
                label: "whatsapp",
                key: "whatsapp",
              },
              path: ["whatsapp"],
            },
          ],
        },
        error: "WhatsApp não cadastrado.",
        name: "not found",
      };
    }

    const infoRoot = await this.sendCodeWhatsappChangePassword.getInfoRoot();

    if (!infoRoot) {
      throw {
        message: "O servidor está indisponível.",
        statusCode: 422,
        details: {
          body: [
            {
              message: "O servidor está indisponível.",
            },
          ],
        },
        error: "O servidor está indisponível.",
        name: "error",
      };
    }

    const code = String(
      Math.floor(Math.random() * (99999 - 10000 + 1)) + 10000
    );
    const send = await this.sendCodeWhatsappChangePassword.sendCodeWhatsApp({
      code,
      rootId: infoRoot.id,
      whatsapp: dto.whatsapp,
    });

    await this.sendCodeWhatsappChangePassword.updateCodeUser({
      code,
      whatsapp: dto.whatsapp,
    });

    if (send) {
      return {
        message: "OK",
      };
    }
    throw {
      message:
        "Error ao tentar enviar mensagem, verifique se o número está correto!",
      statusCode: 422,
      details: {
        body: [
          {
            message:
              "Error ao tentar enviar mensagem, verifique se o número está correto!",
          },
        ],
      },
      error:
        "Error ao tentar enviar mensagem, verifique se o número está correto!",
      name: "error",
    };
  }
}
