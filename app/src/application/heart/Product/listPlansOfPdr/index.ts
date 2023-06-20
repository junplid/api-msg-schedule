import { ListPlansOfPdrImplementation } from "./Implementation";
import { ListPlansOfPdrController } from "./Controller";
import { ListPlansOfPdrUseCase } from "./UseCase";

const listPlansOfPdrImplementation = new ListPlansOfPdrImplementation();
const listPlansOfPdrUseCase = new ListPlansOfPdrUseCase(
  listPlansOfPdrImplementation
);
export const listPlansOfPdrController = ListPlansOfPdrController(
  listPlansOfPdrUseCase
).execute;
