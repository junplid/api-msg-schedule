import { ChangeFieldsMessageDTO_I } from "./DTO";

interface propsDataUpdate_I {
  id: number;
  days?: number;
  text?: string;
}

export interface ChangeFieldsMessageRepository_I {
  update(data: propsDataUpdate_I): Promise<void>;
  findMsg(id: number): Promise<number | null>;
}
