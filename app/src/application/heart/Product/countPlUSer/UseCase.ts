import { CountPlansUserRepository_I } from "./Repository";
import { CountPlansUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountPlansUserUseCase {
  constructor(private countPlansUser: CountPlansUserRepository_I) {}

  async run(dto: CountPlansUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.countPlansUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
