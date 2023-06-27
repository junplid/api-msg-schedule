export interface result_I {
  createAt: Date;
  id: number;
}

export interface StatisticRepository_I {
  get(): Promise<result_I[]>;
}
