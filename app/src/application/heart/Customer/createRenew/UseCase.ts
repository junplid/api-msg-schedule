import { RenewCustomerRepository_I } from "./Repository";
import { RenewCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { Payment_I } from "../../../../entities/Payment";

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

    return { message: "OK" };
  }
}
