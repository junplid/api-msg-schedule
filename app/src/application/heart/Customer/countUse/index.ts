import { CountCustomerOfUserImplementation } from "./Implementation";
import { CountCustomerOfUserController } from "./Controller";
import { CountCustomerOfUserUseCase } from "./UseCase";

const countCustomerOfUserImplementation =
  new CountCustomerOfUserImplementation();
const countCustomerOfUserUseCase = new CountCustomerOfUserUseCase(
  countCustomerOfUserImplementation
);
export const countCustomerOfUserController = CountCustomerOfUserController(
  countCustomerOfUserUseCase
).execute;
