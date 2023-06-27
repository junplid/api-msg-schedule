import { CountCustomerImplementation } from "./Implementation";
import { CountCustomerController } from "./Controller";
import { CountCustomerUseCase } from "./UseCase";

const countCustomerImplementation = new CountCustomerImplementation();
const countCustomerUseCase = new CountCustomerUseCase(
  countCustomerImplementation
);
export const countCustomerController =
  CountCustomerController(countCustomerUseCase).execute;
