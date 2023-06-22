import { User_I } from "../../../../entities/User";

export interface propsSend_I {
  rootId: number;
  whatsapp: string;
  code: string;
}

export interface propsUpdate_I {
  whatsapp: string;
  code: string;
}

export interface propsInfoRoot_I {
  id: number;
}

export interface SendCodeWhatsappChangePasswordRepository_I {
  getInfoRoot(): Promise<propsInfoRoot_I | null>;
  sendCodeWhatsApp(props: propsSend_I): Promise<boolean>;
  getInfoWhatsAppUser(whatsapp: string): Promise<boolean>;
  updateCodeUser(props: propsUpdate_I): Promise<void>;
}
