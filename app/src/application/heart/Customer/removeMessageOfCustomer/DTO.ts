import { ParamsDictionary } from "express-serve-static-core";

export interface RemoveMessageOfCustomerDTO_I extends ParamsDictionary {
  id: string;
  messageId: string;
}
