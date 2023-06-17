import { ListMessageOfUserImplementation } from "./Implementation";
import { ListMessageOfUserController } from "./Controller";
import { ListMessageOfUserUseCase } from "./UseCase";

const listMessageOfUserImplementation = new ListMessageOfUserImplementation();
const listMessageOfUserUseCase = new ListMessageOfUserUseCase(
  listMessageOfUserImplementation
);
export const listMessageOfUserController = ListMessageOfUserController(
  listMessageOfUserUseCase
).execute;
