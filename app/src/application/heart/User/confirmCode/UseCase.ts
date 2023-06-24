import { ConfirmCodeRepository_I } from "./Repository";
import { ConfirmCodeDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { createToken } from "../../../../common/utils/token-access";

export class ConfirmCodeUseCase {
  constructor(private confirmCode: ConfirmCodeRepository_I) {}

  async run(dto: ConfirmCodeDTO_I): Promise<RunUseCase_I> {
    const infoUser = await this.confirmCode.getInfoUser({
      whatsapp: dto.whatsapp,
    });

    if (!infoUser || !infoUser.code) {
      throw {
        message: "Usúario não encontrado",
        statusCode: 400,
        details: {
          body: [
            {
              message: "Usúario não encontrado",
            },
          ],
        },
        error: "Usúario não encontrado",
        name: "not found",
      };
    }

    if (infoUser.code !== dto.code) {
      throw {
        message: "Código incorreto.",
        statusCode: 400,
        details: {
          body: [
            {
              message: "Código incorreto.",
              path: ["code"],
            },
          ],
        },
        error: "Código incorreto.",
        name: "not found",
      };
    }

    const token = await createToken(
      { id: infoUser.id },
      process.env[`SECRET_TOKEN_API_${infoUser.type.toUpperCase()}`] as string
    );

    return { message: "OK", data: token };
  }
}
