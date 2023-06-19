import { DellPlanOfProductImplementation } from "./Implementation";
import { DellPlanOfProductController } from "./Controller";
import { DellPlanOfProductUseCase } from "./UseCase";

const dellPlanOfProductImplementation = new DellPlanOfProductImplementation();
const dellPlanOfProductUseCase = new DellPlanOfProductUseCase(
  dellPlanOfProductImplementation
);
export const dellPlanOfProductController = DellPlanOfProductController(
  dellPlanOfProductUseCase
).execute;
