export interface UpdatePaymentDTO_I {
  name: string;
  price: number;
  type_transation: "PROHIBITED" | "EXIT";
  userId: number;
  date: Date;
  id: number;
}
