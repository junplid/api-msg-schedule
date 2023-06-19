export interface propsDataUpdate_I {
  id: number;
  productId: number;
  name?: string;
  price?: number;
}

export interface resultfind_I {
  userId: number;
  productId: number;
}

export interface ChangeFieldsPlanProductRepository_I {
  update(data: propsDataUpdate_I): Promise<void>;
  findPlan(id: number): Promise<resultfind_I | null>;
}
