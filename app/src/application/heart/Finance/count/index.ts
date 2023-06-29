import { CountFinanceOfUserImplementation } from "./Implementation";
import { CountFinanceOfUserController } from "./Controller";
import { CountFinanceOfUserUseCase } from "./UseCase";

const countFinanceOfUserImplementation = new CountFinanceOfUserImplementation();
const countFinanceOfUserUseCase = new CountFinanceOfUserUseCase(
  countFinanceOfUserImplementation
);
export const countFinanceOfUserController = CountFinanceOfUserController(
  countFinanceOfUserUseCase
).execute;
