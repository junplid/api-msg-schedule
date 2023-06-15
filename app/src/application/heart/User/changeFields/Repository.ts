import { ChangeFieldsUserDTO_I } from "./DTO";

export interface ChangeFieldsUserRepository_I {
  update(data: ChangeFieldsUserDTO_I, key: string): Promise<void>;
}
