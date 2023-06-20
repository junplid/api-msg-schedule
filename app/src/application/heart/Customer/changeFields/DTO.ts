import { ParamsDictionary } from "express-serve-static-core";
type Invoice_T = "PAY" | "PENDING";

export interface ChangeCustomerFieldsDTO_I {
  full_name: string;
  whatsapp: string;
  login: string;
  password: string;
  invoice: Invoice_T;
  dueDate: Date;
  comments: string;
  readonly planId: number;
  readonly productId: number;
  readonly userId: number;
}

export interface ChangeCustomerFieldsDTO_I_Params extends ParamsDictionary {
  id: string;
}
