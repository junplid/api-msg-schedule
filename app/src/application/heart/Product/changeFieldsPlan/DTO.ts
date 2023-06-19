import { ParamsDictionary } from "express-serve-static-core";

export interface ChangeFieldsPlanProductDTO_I {
  price?: string;
  name?: string;
}

export interface ChangeFieldsPlanProductDTO_I_Params extends ParamsDictionary {
  id: string;
}
