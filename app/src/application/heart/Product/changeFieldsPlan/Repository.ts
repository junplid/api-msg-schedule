export interface propsDataUpdate_I {
  id: number;
  name?: string;
  price?: number;
}

export interface ChangeFieldsPlanProductRepository_I {
  update(data: propsDataUpdate_I): Promise<void>;
  findPlan(id: number): Promise<number | null>;
}
