import { DellProductOfUserRepository_I } from "./Repository";
import { DellProductOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class DellProductOfUserUseCase {
  constructor(private dellProductOfUser: DellProductOfUserRepository_I) {}

  async run(
    dto: DellProductOfUserDTO_I,
    userId: number
  ): Promise<RunUseCase_I> {
    const keyUserMsg = await this.dellProductOfUser.findMsg(Number(dto.id));

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

    if (keyUserMsg !== userId) {
      throw {
        message: "Só é possível excluir as mensagens que você criou.",
        statusCode: 400,
        details: {
          body: [
            { message: "Só é possível excluir as mensagens que você criou." },
          ],
        },
        error: "Só é possível excluir as mensagens que você criou.",
        name: "unauthorized",
      };
    }

    await this.dellProductOfUser.dell(Number(dto.id));
    return { message: "OK" };
  }
}
