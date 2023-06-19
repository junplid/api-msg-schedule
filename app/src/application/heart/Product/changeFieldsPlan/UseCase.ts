import { ChangeFieldsPlanProductRepository_I } from "./Repository";
import { ChangeFieldsPlanProductDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ChangeFieldsPlanProductUseCase {
  constructor(
    private changeFieldsPlanProduct: ChangeFieldsPlanProductRepository_I
  ) {}

  async run({
    userId,
    ...dto
  }: ChangeFieldsPlanProductDTO_I & {
    userId: number;
    id: string;
  }): Promise<RunUseCase_I> {
    const dataInfo = await this.changeFieldsPlanProduct.findPlan(
      Number(dto.id)
    );

    if (!dataInfo) {
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

    if (dataInfo.userId !== userId) {
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

    await this.changeFieldsPlanProduct.update({
      id: Number(dto.id),
      ...(dto.price && { price: Number(dto.price) }),
      ...(dto.name && { name: dto.name }),
      productId: dataInfo.productId,
    });

    return { message: "OK" };
  }
}
