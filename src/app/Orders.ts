import { Customer } from "./Customer";

export interface Orders{
  orderId: number,
  orderDate: Date,
  orderQuantity: number,
  orderPrice: number,
  customer: Customer
}