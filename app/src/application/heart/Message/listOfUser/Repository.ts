import { Message_I } from "../../../../entities/Message";

export interface ListMessageOfUserRepository_I {
  get(userId: number): Promise<Omit<Message_I, "userId">[]>;
}
