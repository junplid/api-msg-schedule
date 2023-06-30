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

    if (keyUserMsg.userId !== userId) {
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

    let vl = 0;

    if (keyUserMsg.type_transation === "PROHIBITED") {
      vl = Number(keyUserMsg.price) * -1;
    }
    if (keyUserMsg.type_transation === "EXIT") {
      vl = Number(keyUserMsg.price);
    }

    await this.dellPaymentOfUser.dell(Number(dto.id));
    await this.dellPaymentOfUser.decAmount(keyUserMsg.userId, vl);
    return { message: "OK" };
  }
}
