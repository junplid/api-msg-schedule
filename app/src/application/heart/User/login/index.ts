import { LoginImplementation } from "./Implementation";
import { LoginController } from "./Controller";
import { LoginUseCase } from "./UseCase";

const loginImplementation = new LoginImplementation();
const loginUseCase = new LoginUseCase(loginImplementation);
export const loginController = LoginController(loginUseCase).execute;
