export interface CreateChoiceOptionRepository_I {
  create<D>(data: D, product2_id: string): Promise<void>;
}
