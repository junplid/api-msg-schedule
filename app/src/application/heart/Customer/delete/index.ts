import { DellCustomerOfUserImplementation } from "./Implementation";
import { DellCustomerOfUserController } from "./Controller";
import { DellCustomerOfUserUseCase } from "./UseCase";

const dellCustomerOfUserImplementation = new DellCustomerOfUserImplementation();
const dellCustomerOfUserUseCase = new DellCustomerOfUserUseCase(
  dellCustomerOfUserImplementation
);
export const dellCustomerOfUserController = DellCustomerOfUserController(
  dellCustomerOfUserUseCase
).execute;
