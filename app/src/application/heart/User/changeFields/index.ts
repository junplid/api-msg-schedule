import { ChangeFieldsUserImplementation } from "./Implementation";
import { ChangeFieldsUserController } from "./Controller";
import { ChangeFieldsUserUseCase } from "./UseCase";

const changeFieldsUserImplementation = new ChangeFieldsUserImplementation();
const changeFieldsUserUseCase = new ChangeFieldsUserUseCase(
  changeFieldsUserImplementation
);
export const changeFieldsUserController = ChangeFieldsUserController(
  changeFieldsUserUseCase
).execute;
