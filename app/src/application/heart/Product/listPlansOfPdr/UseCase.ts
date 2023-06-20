import { ListPlansOfPdrRepository_I } from "./Repository";
import { ListPlansOfPdrDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListPlansOfPdrUseCase {
  constructor(private listPlansOfPdr: ListPlansOfPdrRepository_I) {}

  async run(dto: ListPlansOfPdrDTO_I & { id: string }): Promise<RunUseCase_I> {
    const data = await this.listPlansOfPdr.get(Number(dto.id));

    return {
      message: "OK",
      data: data,
    };
  }
}
