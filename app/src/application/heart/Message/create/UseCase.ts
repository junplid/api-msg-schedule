import { CreateMessageRepository_I } from "./Repository";
import { CreateMessageDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CreateMessageUseCase {
  constructor(private createMessage: CreateMessageRepository_I) {}

  async run(dto: CreateMessageDTO_I): Promise<RunUseCase_I> {
    const id = await this.createMessage.create(dto);

    return {
      message: "OK",
      data: {
        id,
      },
    };
  }
}
