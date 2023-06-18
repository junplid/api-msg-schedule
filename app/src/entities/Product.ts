export interface Plans {
  readonly id: number;
  name: string;
  price: number;
  readonly product_id: number;
}

export interface Product<IPlans = Plans[]> {
  readonly id: number;
  name: string;
  price: number;
  plans: IPlans;
  readonly user_key: string;
}
