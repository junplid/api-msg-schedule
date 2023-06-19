import { ChangeFieldsProductImplementation } from "./Implementation";
import { ChangeFieldsProductController } from "./Controller";
import { ChangeFieldsProductUseCase } from "./UseCase";

const changeFieldsProductImplementation =
  new ChangeFieldsProductImplementation();
const changeFieldsProductUseCase = new ChangeFieldsProductUseCase(
  changeFieldsProductImplementation
);
export const changeFieldsProductController = ChangeFieldsProductController(
  changeFieldsProductUseCase
).execute;
