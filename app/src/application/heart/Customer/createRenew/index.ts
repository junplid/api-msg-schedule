import { RenewCustomerImplementation } from "./Implementation";
import { RenewCustomerController } from "./Controller";
import { RenewCustomerUseCase } from "./UseCase";

const renewCustomerImplementation = new RenewCustomerImplementation();
const renewCustomerUseCase = new RenewCustomerUseCase(
  renewCustomerImplementation
);
export const renewCustomerController =
  RenewCustomerController(renewCustomerUseCase).execute;
