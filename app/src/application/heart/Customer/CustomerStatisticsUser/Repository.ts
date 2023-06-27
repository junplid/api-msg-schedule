export interface result_I {
  createAt: Date;
  id: number;
}

export interface CustomerStatisticsUserRepository_I {
  get(userId: number): Promise<result_I[]>;
}
