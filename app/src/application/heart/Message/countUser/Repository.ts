export interface CountMessageUserRepository_I {
  get(userId: number): Promise<number>;
}
