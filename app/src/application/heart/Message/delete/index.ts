import { DellMessageOfUserImplementation } from "./Implementation";
import { DellMessageOfUserController } from "./Controller";
import { DellMessageOfUserUseCase } from "./UseCase";

const dellMessageOfUserImplementation = new DellMessageOfUserImplementation();
const dellMessageOfUserUseCase = new DellMessageOfUserUseCase(
  dellMessageOfUserImplementation
);
export const dellMessageOfUserController = DellMessageOfUserController(
  dellMessageOfUserUseCase
).execute;
