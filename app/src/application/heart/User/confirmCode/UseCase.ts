import { ConfirmCodeRepository_I } from "./Repository";
import { ConfirmCodeDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { createToken } from "../../../../common/utils/token-access";

export class ConfirmCodeUseCase {
  constructor(private confirmCode: ConfirmCodeRepository_I) {}

  async run(dto: ConfirmCodeDTO_I): Promise<RunUseCase_I> {
    const code = await this.confirmCode.getInfo(dto.keyuser);

    if (!code) throw new Error("Error interno no servidor.");
    if (code.available) {
      return {
        message: "Usuário já foi verificado.",
      };
    }
    if (code.code !== dto.code) throw new Error("Código incorreto.");

    await this.confirmCode.updateAvaillable(dto.keyuser);

    const token = await createToken(
      { key: dto.keyuser },
      process.env.SECRET_TOKEN_API_USER as string
    );

    return { message: "OK", data: { token } };
  }
}
