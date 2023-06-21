import { SendMessageCustomerImplementation } from "./Implementation";
import { SendMessageCustomerController } from "./Controller";
import { SendMessageCustomerUseCase } from "./UseCase";

const sendMessageCustomerImplementation =
  new SendMessageCustomerImplementation();
const sendMessageCustomerUseCase = new SendMessageCustomerUseCase(
  sendMessageCustomerImplementation
);
export const sendMessageCustomerController = SendMessageCustomerController(
  sendMessageCustomerUseCase
).execute;
