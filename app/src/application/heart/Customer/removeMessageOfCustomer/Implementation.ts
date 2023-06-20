import { RemoveMessageOfCustomerRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class RemoveMessageOfCustomerImplementation
  extends PrismaCore
  implements RemoveMessageOfCustomerRepository_I
{
  async remove(id: number, messageId: number): Promise<void> {
    try {
      await this.prismaClient.messagesOnCustomer.delete({
        where: {
          messageId_customerId: {
            customerId: id,
            messageId,
          },
        },
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async findMsgOfUser(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.customers.findUnique({
        where: { id },
        select: { userId: true },
      });
      return data?.userId ?? null;
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
