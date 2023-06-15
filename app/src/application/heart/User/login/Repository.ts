export interface resultInfo_I {
  available: number | null;
  password: string;
  key: string;
  due_date: Date | null;
  type: string;
}

export interface LoginRepository_I {
  getInfo(email: string): Promise<resultInfo_I | null>;
}
