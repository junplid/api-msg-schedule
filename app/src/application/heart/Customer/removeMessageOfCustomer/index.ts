import { RemoveMessageOfCustomerImplementation } from "./Implementation";
import { RemoveMessageOfCustomerController } from "./Controller";
import { RemoveMessageOfCustomerUseCase } from "./UseCase";

const removeMessageOfCustomerImplementation =
  new RemoveMessageOfCustomerImplementation();
const removeMessageOfCustomerUseCase = new RemoveMessageOfCustomerUseCase(
  removeMessageOfCustomerImplementation
);
export const removeMessageOfCustomerController =
  RemoveMessageOfCustomerController(removeMessageOfCustomerUseCase).execute;
