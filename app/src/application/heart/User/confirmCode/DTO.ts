import { ParamsDictionary } from "express-serve-static-core";

export interface ConfirmCodeDTO_I extends ParamsDictionary {
  code: string;
  keyuser: string;
}
