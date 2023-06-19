import { ListProductOfUserRepository_I } from "./Repository";
import { ListProductOfUserDTO_I } from "./DTO";
import { RunUseCase_I } from "../../../../types/global";

export class ListProductOfUserUseCase {
  constructor(private listProductOfUser: ListProductOfUserRepository_I) {}

  async run(dto: ListProductOfUserDTO_I): Promise<RunUseCase_I> {
    const data = await this.listProductOfUser.get(dto.user_key);

    const newData = data.map((prd) => {
      return {
        ...prd,
        price: Number(prd.price),
        plans: prd.plans.map((pl) => {
          return { ...pl, price: Number(pl.price) };
        }),
      };
    });

    return {
      message: "OK",
      data: newData,
    };
  }
}
