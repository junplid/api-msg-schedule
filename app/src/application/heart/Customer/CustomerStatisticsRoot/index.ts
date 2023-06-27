import { CustomerStatisticsRootImplementation } from "./Implementation";
import { CustomerStatisticsRootController } from "./Controller";
import { CustomerStatisticsRootUseCase } from "./UseCase";

const customerStatisticsRootImplementation =
  new CustomerStatisticsRootImplementation();
const customerStatisticsRootUseCase = new CustomerStatisticsRootUseCase(
  customerStatisticsRootImplementation
);
export const customerStatisticsRootController =
  CustomerStatisticsRootController(customerStatisticsRootUseCase).execute;
