export interface DellPlanOfProductRepository_I {
  dell(id: number): Promise<void>;
  findPdr(id: number): Promise<number | null>;
}
