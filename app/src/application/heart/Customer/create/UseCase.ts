import { CreateCustomerRepository_I } from "./Repository";
import { CreateCustomerDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { Payment_I } from "../../../../entities/Payment";

export class CreateCustomerUseCase {
  constructor(private createCustomer: CreateCustomerRepository_I) {}

  async run(dto: CreateCustomerDTO_I): Promise<RunUseCase_I> {
    const dd = { ...dto, messageId: undefined };
    const customerId = await this.createCustomer.createCustomer(dd);

    await Promise.all(
      dto.messageId.map(async (msgId) => {
        await this.createCustomer.createCustomerMessage(customerId, msgId);
      })
    );

    if (dto.invoice === "PAY") {
      const expense_product = await this.createCustomer.findProduct(
        dto.productId
      );
      const price_plan = await this.createCustomer.findPlan(dto.productId);

      if (!expense_product || !price_plan)
        throw new Error("notfound expense/price product");

      const payment: Omit<Payment_I, "id"> = {
        payday: new Date(),
        price: Number(price_plan) - Number(expense_product.price),
        type: "user",
        userId: dto.userId,
        name: `Venda efetuada: ${expense_product!.name}, CLI: ${
          dto.full_name
        }, Id Cliente: ${customerId}`,
        type_transation: "PROHIBITED",
      };

      await this.createCustomer.createPayment(payment as Payment_I);
      await this.createCustomer.sumAmount(
        dto.userId,
        Number(price_plan) - Number(expense_product.price)
      );
    }

    return {
      message: "OK",
      data: customerId,
    };
  }
}
