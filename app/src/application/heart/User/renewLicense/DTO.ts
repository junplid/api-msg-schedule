import { ParamsDictionary } from "express-serve-static-core";

export interface RenewLicenseDTO_I_Params extends ParamsDictionary {
  id: string;
  key: string;
}
