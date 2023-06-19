import { ListProductOfUserImplementation } from "./Implementation";
import { ListProductOfUserController } from "./Controller";
import { ListProductOfUserUseCase } from "./UseCase";

const listProductOfUserImplementation = new ListProductOfUserImplementation();
const listProductOfUserUseCase = new ListProductOfUserUseCase(
  listProductOfUserImplementation
);
export const listProductOfUserController = ListProductOfUserController(
  listProductOfUserUseCase
).execute;
