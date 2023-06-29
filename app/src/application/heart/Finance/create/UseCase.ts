import { CreatePaymentRepository_I } from "./Repository";
import { CreatePaymentDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CreatePaymentUseCase {
  constructor(private createPayment: CreatePaymentRepository_I) {}

  async run({ date, ...dto }: CreatePaymentDTO_I): Promise<RunUseCase_I> {
    const data = await this.createPayment.createPayment({
      ...dto,
      type: "user",
      payday: new Date(date),
    });
    return { message: "OK", data: { id: data } };
  }
}
