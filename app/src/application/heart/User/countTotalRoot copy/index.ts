import { CountSubscribersRootImplementation } from "./Implementation";
import { CountSubscribersRootController } from "./Controller";
import { CountSubscribersRootUseCase } from "./UseCase";

const countSubscribersRootImplementation =
  new CountSubscribersRootImplementation();
const countSubscribersRootUseCase = new CountSubscribersRootUseCase(
  countSubscribersRootImplementation
);
export const countSubscribersRootController = CountSubscribersRootController(
  countSubscribersRootUseCase
).execute;
