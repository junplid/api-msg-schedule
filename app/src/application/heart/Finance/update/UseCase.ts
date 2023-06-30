import { UpdatePaymentRepository_I } from "./Repository";
import { UpdatePaymentDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class UpdatePaymentUseCase {
  constructor(private updatePayment: UpdatePaymentRepository_I) {}

  async run({
    date,
    valueaction,
    ...dto
  }: UpdatePaymentDTO_I): Promise<RunUseCase_I> {
    const data = await this.updatePayment.updatePayment({
      ...dto,
      type: "user",
      payday: new Date(date),
    });

    let newvalueaction = 0;

    if (dto.type_transation === "EXIT") {
      newvalueaction = valueaction * -1;
    }
    if (dto.type_transation === "PROHIBITED") {
      newvalueaction = valueaction;
    }

    await this.updatePayment.updateAmountUser({
      userId: dto.userId,
      valueaction: newvalueaction,
    });
    return { message: "OK", data: { id: data } };
  }
}
