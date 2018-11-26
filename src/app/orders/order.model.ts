export class OrderModel {
  orderId: number;
  name: string;
  email: string;
  phone: string;
  products: any;
  totalQuantity: number;
  totalSum: number;
  ddate?: Date;
}
