import { CreateMessageImplementation } from "./Implementation";
import { CreateMessageController } from "./Controller";
import { CreateMessageUseCase } from "./UseCase";

const createMessageImplementation = new CreateMessageImplementation();
const createMessageUseCase = new CreateMessageUseCase(
  createMessageImplementation
);
export const createMessageController =
  CreateMessageController(createMessageUseCase).execute;
