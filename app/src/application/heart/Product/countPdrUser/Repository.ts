export interface CountProductsUserRepository_I {
  get(userId: number): Promise<number>;
}
