import { ParamsDictionary } from "express-serve-static-core";

export interface ChangeFieldsMessageDTO_I {
  text?: string;
  days?: string;
}

export interface ChangeFieldsMessageDTO_I_Params extends ParamsDictionary {
  id: string;
}
