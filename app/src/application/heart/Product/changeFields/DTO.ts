import { ParamsDictionary } from "express-serve-static-core";

export interface ChangeFieldsProductDTO_I {
  price?: string;
  name?: string;
}

export interface ChangeFieldsProductDTO_I_Params extends ParamsDictionary {
  id: string;
}
