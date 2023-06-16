import { LoginRepository_I } from "./Repository";
import { LoginDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { comparePassword } from "../../../../common/utils/crypto-password";
import { createToken } from "../../../../common/utils/token-access";

export class LoginUseCase {
  constructor(private login: LoginRepository_I) {}

  async run(dto: LoginDTO_I): Promise<RunUseCase_I> {
    const data = await this.login.getInfo(dto.email);

    if (!data || !(await comparePassword(dto.password, data.password)))
      throw {
        status: 422,
        message: "E-mail ou senha incorreta",
        data: {
          fields: ["email", "password"],
        },
      };

    if (!data.available) {
      return { message: "Conta não está verificada" };
    }

    if (new Date(data.due_date!) < new Date()) {
      return {
        message: "Sua conta expirou. Renove sua assinatura agora mesmo!",
      };
    }

    const token = await createToken(
      { key: data.key },
      process.env[`SECRET_TOKEN_API_${data.type.toUpperCase()}`] as string
    );

    return {
      message: "OK",
      data: { token },
    };
  }
}
