export interface propsSend_I {
  whatsapp: string;
}

export interface propsInfoUser_I {
  code: string | null;
  id: number;
  type: string;
}

export interface ConfirmCodeRepository_I {
  getInfoUser(props: propsSend_I): Promise<propsInfoUser_I | null>;
}
