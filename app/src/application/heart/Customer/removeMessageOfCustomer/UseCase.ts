import { RemoveMessageOfCustomerRepository_I } from "./Repository";
import { RemoveMessageOfCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class RemoveMessageOfCustomerUseCase {
  constructor(
    private removeMessageOfCustomer: RemoveMessageOfCustomerRepository_I
  ) {}

  async run(
    dto: RemoveMessageOfCustomerDTO_I,
    userId: number
  ): Promise<RunUseCase_I> {
    const userIdCust = await this.removeMessageOfCustomer.findMsgOfUser(
      Number(dto.id)
    );

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

    await this.removeMessageOfCustomer.remove(
      Number(dto.id),
      Number(dto.messageId)
    );
    return { message: "OK" };
  }
}
