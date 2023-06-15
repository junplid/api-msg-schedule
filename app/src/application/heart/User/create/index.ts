import { CreateUserImplementation } from "./Implementation";
import { CreateUserController } from "./Controller";
import { CreateUserUseCase } from "./UseCase";

const createUserImplementation = new CreateUserImplementation();
const createUserUseCase = new CreateUserUseCase(createUserImplementation);
export const createUserController =
  CreateUserController(createUserUseCase).execute;
