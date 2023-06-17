import { CreateSessionWhatsappImplementation } from "./Implementation";
import { CreateSessionWhatsappController } from "./Controller";
import { CreateSessionWhatsappUseCase } from "./UseCase";

const createSessionWhatsappImplementation =
  new CreateSessionWhatsappImplementation();
const createSessionWhatsappUseCase = new CreateSessionWhatsappUseCase(
  createSessionWhatsappImplementation
);
export const createSessionWhatsappController = CreateSessionWhatsappController(
  createSessionWhatsappUseCase
).execute;
