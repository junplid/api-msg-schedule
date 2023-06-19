import { ChangeFieldsPlanProductImplementation } from "./Implementation";
import { ChangeFieldsPlanProductController } from "./Controller";
import { ChangeFieldsPlanProductUseCase } from "./UseCase";

const changeFieldsPlanProductImplementation =
  new ChangeFieldsPlanProductImplementation();
const changeFieldsPlanProductUseCase = new ChangeFieldsPlanProductUseCase(
  changeFieldsPlanProductImplementation
);
export const changeFieldsPlanProductController =
  ChangeFieldsPlanProductController(changeFieldsPlanProductUseCase).execute;
