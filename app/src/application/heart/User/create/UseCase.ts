import { CreateUserRepository_I } from "./Repository";
import { CreateUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { newUser } from "../../../../entities/User";
import { generatePassword } from "../../../../common/utils/crypto-password";

export class CreateUserUseCase {
  constructor(private createUser: CreateUserRepository_I) {}

  async run(dto: CreateUserDTO_I): Promise<RunUseCase_I> {
    const pass = await generatePassword(dto.password);
    const user = newUser({ ...dto, type: "user", password: pass });

    await this.createUser.create(user);

    return {
      message: "OK",
    };
  }
}
