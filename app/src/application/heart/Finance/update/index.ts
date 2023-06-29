import { UpdatePaymentImplementation } from "./Implementation";
import { UpdatePaymentController } from "./Controller";
import { UpdatePaymentUseCase } from "./UseCase";

const updatePaymentImplementation = new UpdatePaymentImplementation();
const updatePaymentUseCase = new UpdatePaymentUseCase(
  updatePaymentImplementation
);
export const updatePaymentController =
  UpdatePaymentController(updatePaymentUseCase).execute;
