import { ListOnlyProductOfUserRepository_I } from "./Repository";
import { ListOnlyProductOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListOnlyProductOfUserUseCase {
  constructor(
    private listOnlyProductOfUser: ListOnlyProductOfUserRepository_I
  ) {}

  async run(dto: ListOnlyProductOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.listOnlyProductOfUser.get(Number(dto.userId));

    const newData = data.map((prd) => {
      return {
        ...prd,
        price: Number(prd.price),
      };
    });

    return {
      message: "OK",
      data: newData,
    };
  }
}
