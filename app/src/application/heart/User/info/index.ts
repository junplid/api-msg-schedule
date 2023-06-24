import { InfoUserImplementation } from "./Implementation";
import { InfoUserController } from "./Controller";
import { InfoUserUseCase } from "./UseCase";

const infoUserImplementation = new InfoUserImplementation();
const infoUserUseCase = new InfoUserUseCase(infoUserImplementation);
export const infoUserController = InfoUserController(infoUserUseCase).execute;
