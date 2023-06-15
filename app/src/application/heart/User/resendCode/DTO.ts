import { ParamsDictionary } from "express-serve-static-core";

export interface ResendCodeDTO_I extends ParamsDictionary {
  keyuser: string;
}
