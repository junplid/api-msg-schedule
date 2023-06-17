import { DellMessageOfUserRepository_I } from "./Repository";
import { DellMessageOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class DellMessageOfUserUseCase {
  constructor(private dellMessageOfUser: DellMessageOfUserRepository_I) {}

  async run(dto: DellMessageOfUserDTO_I): Promise<RunUseCase_I> {
    await this.dellMessageOfUser.dell(dto.user_key, dto.id);
    return { message: "OK" };
  }
}
