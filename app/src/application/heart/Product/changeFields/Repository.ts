import { ChangeFieldsProductDTO_I } from "./DTO";

export interface propsDataUpdate_I {
  id: number;
  name?: string;
  price?: number;
}

export interface ChangeFieldsProductRepository_I {
  update(data: propsDataUpdate_I): Promise<void>;
  findMsg(id: number): Promise<number | null>;
}
