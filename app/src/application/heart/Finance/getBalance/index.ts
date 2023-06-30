import { GetBalanceOfUserImplementation } from "./Implementation";
import { GetBalanceOfUserController } from "./Controller";
import { GetBalanceOfUserUseCase } from "./UseCase";

const getBalanceOfUserImplementation = new GetBalanceOfUserImplementation();
const getBalanceOfUserUseCase = new GetBalanceOfUserUseCase(
  getBalanceOfUserImplementation
);
export const getBalanceOfUserController = GetBalanceOfUserController(
  getBalanceOfUserUseCase
).execute;
