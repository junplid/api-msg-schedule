import { InfoUserRepository_I } from "./Repository";
import { InfoUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class InfoUserUseCase {
  constructor(private infoUser: InfoUserRepository_I) {}

  async run(dto: InfoUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.infoUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
