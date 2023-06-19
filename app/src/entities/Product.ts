import { Decimal } from "@prisma/client/runtime";

export interface Plans {
  readonly id: number;
  name: string;
  price: number | Decimal;
  readonly product_id: number;
}

export interface Product<IPlans = Plans[]> {
  readonly id: number;
  name: string;
  price: number | Decimal;
  plans: IPlans;
  readonly user_key: string;
}
