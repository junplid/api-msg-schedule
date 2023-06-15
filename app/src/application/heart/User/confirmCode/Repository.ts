export interface ConfirmCodeRepository_I {
  getInfo(keyUser: string): Promise<{
    code?: string | null;
    available: number | null;
  } | null>;
  updateAvaillable(key: string): Promise<void>;
}
