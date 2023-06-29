import { DellPaymentOfUserImplementation } from "./Implementation";
import { DellPaymentOfUserController } from "./Controller";
import { DellPaymentOfUserUseCase } from "./UseCase";

const dellPaymentOfUserImplementation = new DellPaymentOfUserImplementation();
const dellPaymentOfUserUseCase = new DellPaymentOfUserUseCase(
  dellPaymentOfUserImplementation
);
export const dellPaymentOfUserController = DellPaymentOfUserController(
  dellPaymentOfUserUseCase
).execute;
