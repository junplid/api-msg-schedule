import { ChangeFieldsMessageImplementation } from "./Implementation";
import { ChangeFieldsMessageController } from "./Controller";
import { ChangeFieldsMessageUseCase } from "./UseCase";

const changeFieldsMessageImplementation =
  new ChangeFieldsMessageImplementation();
const changeFieldsMessageUseCase = new ChangeFieldsMessageUseCase(
  changeFieldsMessageImplementation
);
export const changeFieldsMessageController = ChangeFieldsMessageController(
  changeFieldsMessageUseCase
).execute;
