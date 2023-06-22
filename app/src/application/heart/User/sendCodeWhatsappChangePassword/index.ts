import { SendCodeWhatsappChangePasswordImplementation } from "./Implementation";
import { SendCodeWhatsappChangePasswordController } from "./Controller";
import { SendCodeWhatsappChangePasswordUseCase } from "./UseCase";

const sendCodeWhatsappChangePasswordImplementation =
  new SendCodeWhatsappChangePasswordImplementation();
const sendCodeWhatsappChangePasswordUseCase =
  new SendCodeWhatsappChangePasswordUseCase(
    sendCodeWhatsappChangePasswordImplementation
  );
export const sendCodeWhatsappChangePasswordController =
  SendCodeWhatsappChangePasswordController(
    sendCodeWhatsappChangePasswordUseCase
  ).execute;
