import { StatisticFinanceSubsImplementation } from "./Implementation";
import { StatisticFinanceSubsController } from "./Controller";
import { StatisticFinanceSubsUseCase } from "./UseCase";

const statisticFinanceSubsImplementation =
  new StatisticFinanceSubsImplementation();
const statisticFinanceSubsUseCase = new StatisticFinanceSubsUseCase(
  statisticFinanceSubsImplementation
);
export const statisticFinanceSubsController = StatisticFinanceSubsController(
  statisticFinanceSubsUseCase
).execute;
