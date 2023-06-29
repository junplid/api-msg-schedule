import { DellPaymentOfUserRepository_I } from "./Repository";
import { DellPaymentOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class DellPaymentOfUserUseCase {
  constructor(private dellPaymentOfUser: DellPaymentOfUserRepository_I) {}

  async run(
    dto: DellPaymentOfUserDTO_I,
    userId: number
  ): Promise<RunUseCase_I> {
    const keyUserMsg = await this.dellPaymentOfUser.findPay(Number(dto.id));

    if (!keyUserMsg) {
      throw {
        message: "Pagamento não encontrada.",
        statusCode: 400,
        details: {
          body: [{ message: "Pagamento não encontrada." }],
        },
        error: "Pagamento não encontrada.",
        name: "not found",
      };
    }

    if (keyUserMsg !== userId) {
      throw {
        message: "Só é possível excluir os seus pagamentos.",
        statusCode: 400,
        details: {
          body: [{ message: "Só é possível excluir os seus pagamentos." }],
        },
        error: "Só é possível excluir os seus pagamentos.",
        name: "unauthorized",
      };
    }

    await this.dellPaymentOfUser.dell(Number(dto.id));
    return { message: "OK" };
  }
}
