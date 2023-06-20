import { CreateCustomerRepository_I, propsCreateCData_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CreateCustomerImplementation
  extends PrismaCore
  implements CreateCustomerRepository_I
{
  async createCustomerMessage(
    customerId: number,
    messageId: number
  ): Promise<void> {
    try {
      const data = await this.prismaClient.messagesOnCustomer.create({
        data: { customerId, messageId },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async createCustomer(props: propsCreateCData_I): Promise<number> {
    try {
      const data = await this.prismaClient.customers.create({
        data: props,
        select: { id: true },
      });
      return data.id;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
