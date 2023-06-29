import { CreatePaymentImplementation } from "./Implementation";
import { CreatePaymentController } from "./Controller";
import { CreatePaymentUseCase } from "./UseCase";

const createPaymentImplementation = new CreatePaymentImplementation();
const createPaymentUseCase = new CreatePaymentUseCase(
  createPaymentImplementation
);
export const createPaymentController =
  CreatePaymentController(createPaymentUseCase).execute;
