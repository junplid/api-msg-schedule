import { CreateChoiceOptionImplementation } from "./Implementation";
import { CreateChoiceOptionController } from "./Controller";
import { CreateChoiceOptionUseCase } from "./UseCase";

const createChoiceOptionImplementation =
  new CreateChoiceOptionImplementation();
const createChoiceOptionUseCase = new CreateChoiceOptionUseCase(
  createChoiceOptionImplementation
);
export const createChoiceOptionController = CreateChoiceOptionController(
  createChoiceOptionUseCase
).execute;
