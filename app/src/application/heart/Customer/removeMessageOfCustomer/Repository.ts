export interface RemoveMessageOfCustomerRepository_I {
  remove(id: number, messageId: number): Promise<void>;
  findMsgOfUser(id: number): Promise<number | null>;
}
