export interface RenewCustomerDTO_I {
  customerId: number;
  newDate: Date;
  readonly userId: number;
  message?: string;
}
