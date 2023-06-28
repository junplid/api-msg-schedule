import { AmountSessionsWhatsAppImplementation } from "./Implementation";
import { AmountSessionsWhatsAppController } from "./Controller";
import { AmountSessionsWhatsAppUseCase } from "./UseCase";

const amountSessionsWhatsAppImplementation =
  new AmountSessionsWhatsAppImplementation();
const amountSessionsWhatsAppUseCase = new AmountSessionsWhatsAppUseCase(
  amountSessionsWhatsAppImplementation
);
export const amountSessionsWhatsAppController =
  AmountSessionsWhatsAppController(amountSessionsWhatsAppUseCase).execute;
