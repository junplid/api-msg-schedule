import { CountCustomerUserImplementation } from "./Implementation";
import { CountCustomerUserController } from "./Controller";
import { CountCustomerUserUseCase } from "./UseCase";

const countCustomerUserImplementation = new CountCustomerUserImplementation();
const countCustomerUserUseCase = new CountCustomerUserUseCase(
  countCustomerUserImplementation
);
export const countCustomerUserController = CountCustomerUserController(
  countCustomerUserUseCase
).execute;
