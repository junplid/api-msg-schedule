import { StatisticFinanceCustomersImplementation } from "./Implementation";
import { StatisticFinanceCustomersController } from "./Controller";
import { StatisticFinanceCustomersUseCase } from "./UseCase";

const statisticFinanceCustomersImplementation =
  new StatisticFinanceCustomersImplementation();
const statisticFinanceCustomersUseCase = new StatisticFinanceCustomersUseCase(
  statisticFinanceCustomersImplementation
);
export const statisticFinanceCustomersController =
  StatisticFinanceCustomersController(statisticFinanceCustomersUseCase).execute;
