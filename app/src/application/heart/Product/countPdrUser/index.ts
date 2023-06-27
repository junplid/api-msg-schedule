import { CountProductsUserImplementation } from "./Implementation";
import { CountProductsUserController } from "./Controller";
import { CountProductsUserUseCase } from "./UseCase";

const countProductsUserImplementation = new CountProductsUserImplementation();
const countProductsUserUseCase = new CountProductsUserUseCase(
  countProductsUserImplementation
);
export const countProductsUserController = CountProductsUserController(
  countProductsUserUseCase
).execute;
