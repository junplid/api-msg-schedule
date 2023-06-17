import { ChangeFieldsMessageRepository_I } from "./Repository";
import { ChangeFieldsMessageDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { generatePassword } from "../../../../common/utils/crypto-password";

export class ChangeFieldsMessageUseCase {
  constructor(private changeFieldsMessage: ChangeFieldsMessageRepository_I) {}

  async run({
    user_key,
    ...dto
  }: ChangeFieldsMessageDTO_I & { user_key: string }): Promise<RunUseCase_I> {
    await this.changeFieldsMessage.update(dto, user_key);
    return { message: "OK" };
  }
}
