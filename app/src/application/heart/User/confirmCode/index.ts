import { ConfirmCodeImplementation } from "./Implementation";
import { ConfirmCodeController } from "./Controller";
import { ConfirmCodeUseCase } from "./UseCase";

const confirmCodeImplementation = new ConfirmCodeImplementation();
const confirmCodeUseCase = new ConfirmCodeUseCase(confirmCodeImplementation);
export const confirmCodeController =
  ConfirmCodeController(confirmCodeUseCase).execute;
