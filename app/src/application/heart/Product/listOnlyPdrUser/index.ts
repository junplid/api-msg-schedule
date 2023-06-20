import { ListOnlyProductOfUserImplementation } from "./Implementation";
import { ListOnlyProductOfUserController } from "./Controller";
import { ListOnlyProductOfUserUseCase } from "./UseCase";

const listOnlyProductOfUserImplementation =
  new ListOnlyProductOfUserImplementation();
const listOnlyProductOfUserUseCase = new ListOnlyProductOfUserUseCase(
  listOnlyProductOfUserImplementation
);
export const listOnlyProductOfUserController = ListOnlyProductOfUserController(
  listOnlyProductOfUserUseCase
).execute;
