import { ListFinanceOfUserImplementation } from "./Implementation";
import { ListFinanceOfUserController } from "./Controller";
import { ListFinanceOfUserUseCase } from "./UseCase";

const listFinanceOfUserImplementation = new ListFinanceOfUserImplementation();
const listFinanceOfUserUseCase = new ListFinanceOfUserUseCase(
  listFinanceOfUserImplementation
);
export const listFinanceOfUserController = ListFinanceOfUserController(
  listFinanceOfUserUseCase
).execute;
