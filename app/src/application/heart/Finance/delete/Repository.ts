export interface DellPaymentOfUserRepository_I {
  dell(id: number): Promise<void>;
  findPay(id: number): Promise<number | null>;
}
