import { GetStateSessionWhatsappImplementation } from "./Implementation";
import { GetStateSessionWhatsappController } from "./Controller";
import { GetStateSessionWhatsappUseCase } from "./UseCase";

const getStateSessionWhatsappImplementation =
  new GetStateSessionWhatsappImplementation();
const getStateSessionWhatsappUseCase = new GetStateSessionWhatsappUseCase(
  getStateSessionWhatsappImplementation
);
export const getStateSessionWhatsappController =
  GetStateSessionWhatsappController(getStateSessionWhatsappUseCase).execute;
