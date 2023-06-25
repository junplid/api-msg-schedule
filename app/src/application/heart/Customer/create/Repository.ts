type Invoice_T = "PAY" | "PENDING";

export type propsCreateCData_I = {
  full_name: string;
  whatsapp: string;
  login: string;
  password: string;
  invoice: Invoice_T;
  dueDate: Date;
  comments: string;
  readonly planId?: number;
  readonly productId?: number;
  readonly userId: number;
};

export interface CreateCustomerRepository_I {
  createCustomer(props: propsCreateCData_I): Promise<number>;
  createCustomerMessage(customerId: number, messageId: number): Promise<void>;
}
