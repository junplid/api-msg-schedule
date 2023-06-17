import { Message_I } from "../../../../entities/Message";

export interface ListMessageOfUserRepository_I {
  get(user_key: string): Promise<Omit<Message_I, "user_key">[]>;
}
