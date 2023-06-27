import { StatisticImplementation } from "./Implementation";
import { StatisticController } from "./Controller";
import { StatisticUseCase } from "./UseCase";

const statisticImplementation = new StatisticImplementation();
const statisticUseCase = new StatisticUseCase(statisticImplementation);
export const statisticController =
  StatisticController(statisticUseCase).execute;
