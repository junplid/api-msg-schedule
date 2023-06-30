import { ChangeCustomerFieldsRepository_I } from "./Repository";
import { ChangeCustomerFieldsDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { Payment_I } from "../../../../entities/Payment";

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

    if (keyUserCust.userId !== userId) {
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

    if (keyUserCust.invoice === "PENDING" && dto.invoice === "PAY") {
      const expense_product = await this.changeCustomerFields.findProduct(
        dto.productId
      );
      const price_plan = await this.changeCustomerFields.findPlan(
        dto.productId
      );

      const payment: Omit<Payment_I, "id"> = {
        payday: new Date(),
        price: Number(price_plan) - Number(expense_product!.price),
        type: "user",
        userId: keyUserCust.userId,
        name: `Venda efetuada: ${keyUserCust.full_name}, Id Cliente: ${dto.id}`,
        type_transation: "PROHIBITED",
      };

      await this.changeCustomerFields.createPayment(payment as Payment_I);
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
