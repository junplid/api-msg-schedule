import { User_I } from "../../../../entities/User";

export interface OrderRenewLicenseRepository_I {
  create(data: Omit<User_I, "id">): Promise<void>;
  getInfo(id: number): Promise<{ email: string } | null>;
}
