import { ChangeFieldsMessageRepository_I } from "./Repository";
import { ChangeFieldsMessageDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ChangeFieldsMessageUseCase {
  constructor(private changeFieldsMessage: ChangeFieldsMessageRepository_I) {}

  async run({
    user_key,
    ...dto
  }: ChangeFieldsMessageDTO_I & {
    user_key: string;
    id: string;
  }): Promise<RunUseCase_I> {
    const keyUserMsg = await this.changeFieldsMessage.findMsg(Number(dto.id));

    if (!keyUserMsg) {
      throw {
        message: "Mensagem não encontrada.",
        statusCode: 400,
        details: {
          body: [{ message: "Mensagem não encontrada." }],
        },
        error: "Mensagem não encontrada.",
        name: "not found",
      };
    }

    if (keyUserMsg !== user_key) {
      throw {
        message: "Só é possível editar as mensagens que você criou.",
        statusCode: 400,
        details: {
          body: [
            { message: "Só é possível editar as mensagens que você criou." },
          ],
        },
        error: "Só é possível editar as mensagens que você criou.",
        name: "unauthorized",
      };
    }

    await this.changeFieldsMessage.update(
      { ...dto, id: Number(dto.id) },
      user_key
    );
    return { message: "OK" };
  }
}
