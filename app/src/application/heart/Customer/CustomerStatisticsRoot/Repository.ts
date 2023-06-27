export interface result_I {
  createAt: Date;
  id: number;
}

export interface CustomerStatisticsRootRepository_I {
  get(): Promise<result_I[]>;
}
