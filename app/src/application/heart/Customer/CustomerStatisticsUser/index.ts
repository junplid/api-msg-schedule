import { CustomerStatisticsUserImplementation } from "./Implementation";
import { CustomerStatisticsUserController } from "./Controller";
import { CustomerStatisticsUserUseCase } from "./UseCase";

const customerStatisticsUserImplementation =
  new CustomerStatisticsUserImplementation();
const customerStatisticsUserUseCase = new CustomerStatisticsUserUseCase(
  customerStatisticsUserImplementation
);
export const customerStatisticsUserController =
  CustomerStatisticsUserController(customerStatisticsUserUseCase).execute;
