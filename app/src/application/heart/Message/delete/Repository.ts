export interface DellMessageOfUserRepository_I {
  dell(user_key: string, id: number): Promise<void>;
}
