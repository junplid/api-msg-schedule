import { ChangeFieldsProductRepository_I } from "./Repository";
import { ChangeFieldsProductDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ChangeFieldsProductUseCase {
  constructor(private changeFieldsProduct: ChangeFieldsProductRepository_I) {}

  async run({
    userId,
    ...dto
  }: ChangeFieldsProductDTO_I & {
    userId: number;
    id: string;
  }): Promise<RunUseCase_I> {
    const keyUserMsg = await this.changeFieldsProduct.findMsg(Number(dto.id));

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

    await this.changeFieldsProduct.update({
      id: Number(dto.id),
      ...(dto.price && { days: Number(dto.price) }),
      ...(dto.name && { text: dto.name }),
    });

    return { message: "OK" };
  }
}
