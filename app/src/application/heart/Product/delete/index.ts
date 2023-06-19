import { DellProductOfUserImplementation } from "./Implementation";
import { DellProductOfUserController } from "./Controller";
import { DellProductOfUserUseCase } from "./UseCase";

const dellProductOfUserImplementation = new DellProductOfUserImplementation();
const dellProductOfUserUseCase = new DellProductOfUserUseCase(
  dellProductOfUserImplementation
);
export const dellProductOfUserController = DellProductOfUserController(
  dellProductOfUserUseCase
).execute;
