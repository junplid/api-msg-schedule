import { ResendCodeImplementation } from "./Implementation";
import { ResendCodeController } from "./Controller";
import { ResendCodeUseCase } from "./UseCase";

const resendCodeImplementation = new ResendCodeImplementation();
const resendCodeUseCase = new ResendCodeUseCase(resendCodeImplementation);
export const resendCodeController =
  ResendCodeController(resendCodeUseCase).execute;
