export interface GetBalanceOfUserRepository_I {
  get(userId: number): Promise<number>;
}
