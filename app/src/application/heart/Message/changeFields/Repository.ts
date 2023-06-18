import { ChangeFieldsMessageDTO_I } from "./DTO";

export interface ChangeFieldsMessageRepository_I {
  update(
    data: Omit<ChangeFieldsMessageDTO_I & { id: number }, "user_key">,
    user_key: string
  ): Promise<void>;
  findMsg(id: number): Promise<string | null>;
}
