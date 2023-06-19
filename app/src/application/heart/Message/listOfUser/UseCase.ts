import { ListMessageOfUserRepository_I } from "./Repository";
import { ListMessageOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListMessageOfUserUseCase {
  constructor(private listMessageOfUser: ListMessageOfUserRepository_I) {}

  async run(dto: ListMessageOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.listMessageOfUser.get(dto.userId);

    return {
      message: "OK",
      data,
    };
  }
}
