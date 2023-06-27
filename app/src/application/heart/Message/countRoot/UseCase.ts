import { CountMessageRepository_I } from "./Repository";
import { CountMessageDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountMessageUseCase {
  constructor(private countMessage: CountMessageRepository_I) {}

  async run(dto: CountMessageDTO_I): Promise<RunUseCase_I> {
    const data = await this.countMessage.get();

    return {
      message: "OK",
      data,
    };
  }
}
