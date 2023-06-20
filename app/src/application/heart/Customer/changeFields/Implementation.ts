import { ChangeCustomerFieldsRepository_I, propsUpdate_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class ChangeCustomerFieldsImplementation
  extends PrismaCore
  implements ChangeCustomerFieldsRepository_I
{
  async update({ id, ...props }: propsUpdate_I): Promise<void> {
    try {
      await this.prismaClient.customers.update({
        where: { id },
        data: props,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }

  async findCust(id: number): Promise<number | null> {
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