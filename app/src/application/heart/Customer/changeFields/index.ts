import { ChangeCustomerFieldsImplementation } from "./Implementation";
import { ChangeCustomerFieldsController } from "./Controller";
import { ChangeCustomerFieldsUseCase } from "./UseCase";

const changeCustomerFieldsImplementation =
  new ChangeCustomerFieldsImplementation();
const changeCustomerFieldsUseCase = new ChangeCustomerFieldsUseCase(
  changeCustomerFieldsImplementation
);
export const changeCustomerFieldsController = ChangeCustomerFieldsController(
  changeCustomerFieldsUseCase
).execute;
