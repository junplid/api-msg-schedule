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
    productId: string;
  }): Promise<RunUseCase_I> {
    const dataInfo = await this.changeFieldsPlanProduct.productExist(
      Number(dto.productId)
    );

    if (dataInfo && dataInfo.userId !== userId) {
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

    const id = await this.changeFieldsPlanProduct.update({
      idPlan: dto.idPlan ? Number(dto.idPlan) : undefined,
      ...(dto.price && { price: Number(dto.price) }),
      ...(dto.name && { name: dto.name }),
      productId: Number(dto.productId),
    });

    return { message: "OK", data: id };
  }
}
