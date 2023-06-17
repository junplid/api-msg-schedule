import { CreateSessionWhatsappRepository_I } from "./Repository";
import { CreateSessionWhatsappDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { newUser } from "../../../../entities/User";
import { generatePassword } from "../../../../common/utils/crypto-password";

export class CreateSessionWhatsappUseCase {
  constructor(
    private createSessionWhatsapp: CreateSessionWhatsappRepository_I
  ) {}

  async run(dto: CreateSessionWhatsappDTO_I): Promise<RunUseCase_I> {
    return {
      message: "OK",
    };
  }
}
