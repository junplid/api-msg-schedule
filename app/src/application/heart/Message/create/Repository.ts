import { Message_I } from "../../../../entities/Message";

export interface CreateMessageRepository_I {
  create(data: Omit<Message_I, "id">): Promise<number>;
}
