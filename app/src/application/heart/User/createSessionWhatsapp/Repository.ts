import { User_I } from "../../../../entities/User";

export interface CreateSessionWhatsappRepository_I {
  create(data: Omit<User_I, "id">): Promise<void>;
}
