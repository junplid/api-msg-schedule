export interface result_I {
  email: string;
  full_name: string;
  whatsapp: string;
}

export interface InfoUserRepository_I {
  get(userId: number): Promise<result_I | null>;
}
