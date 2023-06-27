import { CountPlansUserImplementation } from "./Implementation";
import { CountPlansUserController } from "./Controller";
import { CountPlansUserUseCase } from "./UseCase";

const countPlansUserImplementation = new CountPlansUserImplementation();
const countPlansUserUseCase = new CountPlansUserUseCase(
  countPlansUserImplementation
);
export const countPlansUserController = CountPlansUserController(
  countPlansUserUseCase
).execute;
