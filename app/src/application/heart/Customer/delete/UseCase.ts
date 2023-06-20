import { DellCustomerOfUserRepository_I } from "./Repository";
import { DellCustomerOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class DellCustomerOfUserUseCase {
  constructor(private dellCustomerOfUser: DellCustomerOfUserRepository_I) {}

  async run(
    dto: DellCustomerOfUserDTO_I,
    userId: number
  ): Promise<RunUseCase_I> {
    const userIdCust = await this.dellCustomerOfUser.findMsg(Number(dto.id));

    if (!userIdCust) {
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

    if (userIdCust !== userId) {
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

    await this.dellCustomerOfUser.dell(Number(dto.id));
    return { message: "OK" };
  }
}
