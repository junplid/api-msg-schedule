import { RenewCustomerRepository_I } from "./Repository";
import { RenewCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { Payment_I } from "../../../../entities/Payment";
import { storeSessions } from "../../../../sessionsStore";

export class RenewCustomerUseCase {
  constructor(private renewCustomer: RenewCustomerRepository_I) {}

  async run(dto: RenewCustomerDTO_I): Promise<RunUseCase_I> {
    const userIdCust = await this.renewCustomer.findCust(
      Number(dto.customerId)
    );

    if (!userIdCust) {
      throw {
        message: "Cliente não encontrada.",
        statusCode: 400,
        details: {
          body: [{ message: "Cliente não encontrada." }],
        },
        error: "Cliente não encontrada.",
        name: "not found",
      };
    }

    if (userIdCust.userId !== dto.userId) {
      throw {
        message: "Só é possível renovar os clientes que você criou.",
        statusCode: 400,
        details: {
          body: [
            { message: "Só é possível renovar os clientes que você criou." },
          ],
        },
        error: "Só é possível renovar os clientes que você criou.",
        name: "unauthorized",
      };
    }

    await this.renewCustomer.updateDueDate(
      dto.customerId,
      new Date(dto.newDate)
    );

    const payment: Omit<Payment_I, "id"> = {
      payday: new Date(),
      price: userIdCust.profit,
      type: "user",
      userId: userIdCust.userId,
      name: `Renovação efetuada: ${userIdCust.full_name}, Id Cliente: ${dto.customerId}`,
      type_transation: "PROHIBITED",
    };

    await this.renewCustomer.createPayment(payment as Payment_I);
    await this.renewCustomer.sumAmount(dto.userId, Number(userIdCust.profit));

    if (dto.message) {
      await storeSessions[dto.userId]?.sendText(
        `${userIdCust.whatsapp}@c.us`,
        `${dto.message
          .replace(/\\n/g, "\n")
          .replace(/\{NOME\}/, userIdCust.full_name)
          .replace(/\{PRIMEIRO_NOME\}/, userIdCust.full_name.split(" ")[0])
          .replace(/\{ZAP\}/, userIdCust.whatsapp)
          .replace(/\{LOGIN\}/, userIdCust?.login ?? "{LOGIN}")
          .replace(/\{SENHA\}/, userIdCust?.password ?? "{SENHA}")
          .replace(/\{PLANO\}/, userIdCust?.plan?.name ?? "{PLANO}")
          .replace(
            /\{PRECO_PLANO\}/,
            userIdCust?.plan?.price
              ? String(userIdCust?.plan?.price)
              : "{VALOR_PLANO}"
          )
          .replace(/\{PRODUTO\}/, userIdCust?.product?.name ?? "{PRODUTO}")
          .replace(/\{OBS\}/, userIdCust?.comments ?? "{OBS}")
          .replace(
            /\{DATA_VENCI\}/,
            userIdCust?.dueDate
              ? new Date(userIdCust.dueDate).toLocaleDateString("pt-br")
              : "{DATA_VENCI}"
          )}`
      );
    }

    return { message: "OK" };
  }
}
