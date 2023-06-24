import { ParamsDictionary } from "express-serve-static-core";

export interface ChangeFieldsPlanProductDTO_I {
  price?: string;
  name?: string;
  idPlan?: number;
}

export interface ChangeFieldsPlanProductDTO_I_Params extends ParamsDictionary {
  productId: string;
}
