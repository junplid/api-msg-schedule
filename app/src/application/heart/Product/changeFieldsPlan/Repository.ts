export interface propsDataUpdate_I {
  productId: number;
  name?: string;
  price?: number;
  idPlan?: number;
}

export interface resultfind_I {
  userId: number;
}

export interface ChangeFieldsPlanProductRepository_I {
  update(data: propsDataUpdate_I): Promise<number>;
  productExist(productId: number): Promise<resultfind_I | null>;
}
