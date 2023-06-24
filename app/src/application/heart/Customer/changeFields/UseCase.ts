import { ChangeCustomerFieldsRepository_I } from "./Repository";
import { ChangeCustomerFieldsDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ChangeCustomerFieldsUseCase {
  constructor(private changeCustomerFields: ChangeCustomerFieldsRepository_I) {}

  async run({
    userId,
    ...dto
  }: ChangeCustomerFieldsDTO_I & {
    userId: number;
    id: string;
  }): Promise<RunUseCase_I> {
    const keyUserCust = await this.changeCustomerFields.findCust(
      Number(dto.id)
    );

    if (!keyUserCust) {
      throw {
        message: "Cliente não encontrado.",
        statusCode: 400,
        details: {
          body: [{ message: "Cliente não encontrado." }],
        },
        error: "Cliente não encontrado.",
        name: "not found",
      };
    }

    if (keyUserCust !== userId) {
      throw {
        message: "Só é possível editar o seu cliente.",
        statusCode: 400,
        details: {
          body: [{ message: "Só é possível editar o seu cliente." }],
        },
        error: "Só é possível editar o seu cliente.",
        name: "unauthorized",
      };
    }

    await this.changeCustomerFields.update({
      id: Number(dto.id),
      ...(dto.comments && { comments: dto.comments }),
      ...(dto.dueDate && { dueDate: dto.dueDate }),
      ...(dto.full_name && { full_name: dto.full_name }),
      ...(dto.invoice && { invoice: dto.invoice }),
      ...(dto.login && { login: dto.login }),
      ...(dto.password && { password: dto.password }),
      ...(dto.planId && { planId: Number(dto.planId) }),
      ...(dto.productId && { productId: Number(dto.productId) }),
      ...(dto.whatsapp && { whatsapp: dto.whatsapp }),
    });

    await this.changeCustomerFields.deleteAllMsg(Number(dto.id));

    await Promise.all(
      dto?.messageId?.map(async (e) => {
        await this.changeCustomerFields.createCustomerMessage(
          Number(dto.id),
          e
        );
      })
    );

    console.log("Veio aqui");

    return { message: "OK" };
  }
}
