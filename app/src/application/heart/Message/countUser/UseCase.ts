import { CountMessageUserRepository_I } from "./Repository";
import { CountMessageUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountMessageUserUseCase {
  constructor(private countMessageUser: CountMessageUserRepository_I) {}

  async run(dto: CountMessageUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.countMessageUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
