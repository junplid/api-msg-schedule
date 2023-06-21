import { LoginRepository_I } from "./Repository";
import { LoginDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { comparePassword } from "../../../../common/utils/crypto-password";
import { createToken } from "../../../../common/utils/token-access";

export class LoginUseCase {
  constructor(private login: LoginRepository_I) {}

  async run(dto: LoginDTO_I): Promise<RunUseCase_I> {
    const data = await this.login.getInfo(dto.email);

    if (!data || !(await comparePassword(dto.password, data.password))) {
      throw {
        message: "E-mail ou senha incorreta.",
        statusCode: 422,
        details: {
          body: [
            {
              message: "E-mail ou senha incorreta.",
              context: {
                label: "email",
                key: "email",
              },
              path: ["email", "password"],
            },
          ],
        },
        error: "E-mail ou senha incorreta.",
        name: "Error",
      };
    }

    if (data.type === "user" && new Date(data.due_date!) < new Date()) {
      return {
        message: "Sua conta expirou. Renove sua assinatura agora mesmo!",
      };
    }

    const token = await createToken(
      { id: data.id },
      process.env[`SECRET_TOKEN_API_${data.type.toUpperCase()}`] as string
    );

    return {
      message: "OK",
      data: {
        token,
        full_name: data.full_name,
        type: data.type,
        id: data.id,
        due_date: data.due_date,
      },
    };
  }
}
