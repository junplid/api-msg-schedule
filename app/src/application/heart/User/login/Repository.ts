export interface resultInfo_I {
  full_name: string;
  password: string;
  id: number;
  due_date: Date | null;
  type: string;
}

export interface LoginRepository_I {
  getInfo(email: string): Promise<resultInfo_I | null>;
}
