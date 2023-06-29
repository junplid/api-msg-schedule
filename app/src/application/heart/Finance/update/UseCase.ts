import { UpdatePaymentRepository_I } from "./Repository";
import { UpdatePaymentDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class UpdatePaymentUseCase {
  constructor(private updatePayment: UpdatePaymentRepository_I) {}

  async run({ date, ...dto }: UpdatePaymentDTO_I): Promise<RunUseCase_I> {
    const data = await this.updatePayment.updatePayment({
      ...dto,
      type: "user",
      payday: new Date(date),
    });
    return { message: "OK", data: { id: data } };
  }
}
