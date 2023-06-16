import { ConfirmCodeRepository_I } from "./Repository";
import { ConfirmCodeDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { createToken } from "../../../../common/utils/token-access";
import { ValidationError } from "express-validation";
import { throws } from "assert";

export class ConfirmCodeUseCase {
  constructor(private confirmCode: ConfirmCodeRepository_I) {}

  async run(dto: ConfirmCodeDTO_I): Promise<RunUseCase_I> {
    const code = await this.confirmCode.getInfo(dto.keyuser);

    if (!code) {
      throw {
        message: "Error interno no servidor.",
        statusCode: 500,
        details: {},
        error: "Error interno no servidor.",
        name: "Error",
      } as ValidationError;
    }

    if (code.available) {
      return {
        message: "Usuário já foi verificado.",
      };
    }
    if (code.code !== dto.code)
      throw {
        message: "Código incorreto.",
        statusCode: 422,
        details: {
          body: [
            {
              details: [
                {
                  path: ["code"],
                  message: "Código incorreto",
                  type: "error",
                  context: {
                    key: "code",
                    label: "code",
                    value: dto.code,
                  },
                },
              ],
            },
          ],
        },
        error: "Código incorreto.",
        name: "Error",
      } as ValidationError;

    await this.confirmCode.updateAvaillable(dto.keyuser);

    const token = await createToken(
      { key: dto.keyuser },
      process.env.SECRET_TOKEN_API_USER as string
    );

    return { message: "OK", data: { token } };
  }
}
