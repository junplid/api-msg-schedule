export interface CountPlansUserRepository_I {
  get(userId: number): Promise<number>;
}
