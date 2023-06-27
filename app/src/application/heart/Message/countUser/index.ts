import { CountMessageUserImplementation } from "./Implementation";
import { CountMessageUserController } from "./Controller";
import { CountMessageUserUseCase } from "./UseCase";

const countMessageUserImplementation = new CountMessageUserImplementation();
const countMessageUserUseCase = new CountMessageUserUseCase(
  countMessageUserImplementation
);
export const countMessageUserController = CountMessageUserController(
  countMessageUserUseCase
).execute;
