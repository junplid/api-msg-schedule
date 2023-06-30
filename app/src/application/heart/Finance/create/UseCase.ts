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
    await this.createPayment.sumAmount(
      dto.userId,
      dto.type_transation === "PROHIBITED" ? Number(dto.price) : undefined,
      dto.type_transation === "EXIT" ? Number(dto.price) : undefined
    );

    return { message: "OK", data: { id: data } };
  }
}
