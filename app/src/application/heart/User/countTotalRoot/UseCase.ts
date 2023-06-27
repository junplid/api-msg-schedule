import { CountSubscribersRootRepository_I } from "./Repository";
import { CountSubscribersRootDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class CountSubscribersRootUseCase {
  constructor(private countSubscribersRoot: CountSubscribersRootRepository_I) {}

  async run(dto: CountSubscribersRootDTO_I): Promise<RunUseCase_I> {
    const data = await this.countSubscribersRoot.get();

    return {
      message: "OK",
      data,
    };
  }
}
