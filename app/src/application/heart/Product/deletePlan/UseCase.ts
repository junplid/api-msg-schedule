import { DellPlanOfProductRepository_I } from "./Repository";
import { DellPlanOfProductDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class DellPlanOfProductUseCase {
  constructor(private dellPlanOfProduct: DellPlanOfProductRepository_I) {}

  async run(
    dto: DellPlanOfProductDTO_I,
    userId: number
  ): Promise<RunUseCase_I> {
    const keyUserMsg = await this.dellPlanOfProduct.findPdr(Number(dto.id));

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

    await this.dellPlanOfProduct.dell(Number(dto.id));
    return { message: "OK" };
  }
}
