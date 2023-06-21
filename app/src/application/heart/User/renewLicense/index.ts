import { RenewLicenseImplementation } from "./Implementation";
import { RenewLicenseController } from "./Controller";
import { RenewLicenseUseCase } from "./UseCase";

const renewLicenseImplementation = new RenewLicenseImplementation();
const renewLicenseUseCase = new RenewLicenseUseCase(renewLicenseImplementation);
export const renewLicenseController =
  RenewLicenseController(renewLicenseUseCase).execute;
