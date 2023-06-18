import { CreateProductImplementation } from "./Implementation";
import { CreateProductController } from "./Controller";
import { CreateProductUseCase } from "./UseCase";

const createProductImplementation = new CreateProductImplementation();
const createProductUseCase = new CreateProductUseCase(
  createProductImplementation
);
export const createProductController =
  CreateProductController(createProductUseCase).execute;
