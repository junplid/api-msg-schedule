import {
  ChangeFieldsProductRepository_I,
  propsDataUpdate_I,
} from "./Repository";
import { PrismaCore } from "../../../implementations/core";
import { ChangeFieldsProductDTO_I } from "./DTO";

export class ChangeFieldsProductImplementation
  extends PrismaCore
  implements ChangeFieldsProductRepository_I
{
  async update({ id, ...data }: propsDataUpdate_I): Promise<void> {
    try {
      await this.prismaClient.products.update({
        where: { id },
        data,
      });
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
  async findMsg(id: number): Promise<number | null> {
    try {
      const data = await this.prismaClient.products.findUnique({
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
