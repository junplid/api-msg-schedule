import { ChangeFieldsUserRepository_I } from "./Repository";
import { ChangeFieldsUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { generatePassword } from "../../../../common/utils/crypto-password";

export class ChangeFieldsUserUseCase {
  constructor(private changeFieldsUser: ChangeFieldsUserRepository_I) {}

  async run({
    key,
    ...dto
  }: ChangeFieldsUserDTO_I & { key: string }): Promise<RunUseCase_I> {
    const newobj = {
      ...dto,
      ...(dto.password && { password: await generatePassword(dto.password) }),
    };

    await this.changeFieldsUser.update(newobj, key);
    return { message: "OK" };
  }
}
