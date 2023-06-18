export interface DellMessageOfUserRepository_I {
  dell(id: number): Promise<void>;
  findMsg(id: number): Promise<string | null>;
}
