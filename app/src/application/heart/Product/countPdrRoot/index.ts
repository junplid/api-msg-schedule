import { CountProductsImplementation } from "./Implementation";
import { CountProductsController } from "./Controller";
import { CountProductsUseCase } from "./UseCase";

const countProductsImplementation = new CountProductsImplementation();
const countProductsUseCase = new CountProductsUseCase(
  countProductsImplementation
);
export const countProductsController =
  CountProductsController(countProductsUseCase).execute;
