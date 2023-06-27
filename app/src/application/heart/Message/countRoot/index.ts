import { CountMessageImplementation } from "./Implementation";
import { CountMessageController } from "./Controller";
import { CountMessageUseCase } from "./UseCase";

const countMessageImplementation = new CountMessageImplementation();
const countMessageUseCase = new CountMessageUseCase(countMessageImplementation);
export const countMessageController =
  CountMessageController(countMessageUseCase).execute;
