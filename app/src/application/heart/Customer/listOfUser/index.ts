import { ListCustomerOfUserImplementation } from "./Implementation";
import { ListCustomerOfUserController } from "./Controller";
import { ListCustomerOfUserUseCase } from "./UseCase";

const listCustomerOfUserImplementation = new ListCustomerOfUserImplementation();
const listCustomerOfUserUseCase = new ListCustomerOfUserUseCase(
  listCustomerOfUserImplementation
);
export const listCustomerOfUserController = ListCustomerOfUserController(
  listCustomerOfUserUseCase
).execute;
