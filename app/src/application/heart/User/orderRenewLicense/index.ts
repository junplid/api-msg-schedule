import { OrderRenewLicenseImplementation } from "./Implementation";
import { OrderRenewLicenseController } from "./Controller";
import { OrderRenewLicenseUseCase } from "./UseCase";

const orderRenewLicenseImplementation = new OrderRenewLicenseImplementation();
const orderRenewLicenseUseCase = new OrderRenewLicenseUseCase(
  orderRenewLicenseImplementation
);
export const orderRenewLicenseController = OrderRenewLicenseController(
  orderRenewLicenseUseCase
).execute;
