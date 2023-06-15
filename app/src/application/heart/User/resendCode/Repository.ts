export interface resultGetInfo_I {
  code: string | null;
  available: number | null;
  email: string;
}

export interface ResendCodeRepository_I {
  getInfo(keyuser: string): Promise<resultGetInfo_I | null>;
}
