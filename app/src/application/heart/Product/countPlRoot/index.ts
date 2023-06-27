import { CountPlansImplementation } from "./Implementation";
import { CountPlansController } from "./Controller";
import { CountPlansUseCase } from "./UseCase";

const countPlansImplementation = new CountPlansImplementation();
const countPlansUseCase = new CountPlansUseCase(countPlansImplementation);
export const countPlansController =
  CountPlansController(countPlansUseCase).execute;
