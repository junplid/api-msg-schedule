import { CreateCustomerImplementation } from "./Implementation";
import { CreateCustomerController } from "./Controller";
import { CreateCustomerUseCase } from "./UseCase";

const createCustomerImplementation = new CreateCustomerImplementation();
const createCustomerUseCase = new CreateCustomerUseCase(
  createCustomerImplementation
);
export const createCustomerController = CreateCustomerController(
  createCustomerUseCase
).execute;
