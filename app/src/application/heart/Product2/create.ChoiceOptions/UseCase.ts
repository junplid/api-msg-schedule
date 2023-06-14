import { CreateChoiceOptionRepository_I } from "./Repository";
import { CreateChoiceOptionDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";
import { v4 } from "uuid";

export class CreateChoiceOptionUseCase {
  constructor(
    private createChoiceOptionRepository: CreateChoiceOptionRepository_I
  ) {}

  async run(dto: CreateChoiceOptionDTO_I): Promise<RunUseCase_I> {
    return { message: "Sucess." };
  }
}
