import { CreateChoiceOptionRepository_I } from "./Repository";
import { PrismaCore } from "../../../implementations/core";

export class CreateChoiceOptionImplementation
  extends PrismaCore
  implements CreateChoiceOptionRepository_I
{
  async create<D = any>(data: D, product2_id: string): Promise<void> {
    try {
    } catch (error) {
      console.log(error);
      throw new Error("Erro dataBase.");
    }
  }
}
