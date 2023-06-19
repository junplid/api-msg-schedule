export interface CreateProductDTO_I {
  name: string;
  price: number;
  plans: {
    name: string;
    price: number;
  }[];
  readonly userId: number;
}
