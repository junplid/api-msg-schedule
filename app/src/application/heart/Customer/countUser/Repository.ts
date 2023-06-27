export interface CountCustomerUserRepository_I {
  get(userId: number): Promise<number>;
}
