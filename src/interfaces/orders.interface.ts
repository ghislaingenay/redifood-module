import { IFoodApi } from './foods.interface';
import { ECurrency } from './global.interface';

export enum EOrderStatus {
  CREATED = 'created',
  UPDATED = 'updated',
  AWAITING_PAYMENT = 'awaiting payment',
  COMPLETE = 'completed',
}

export interface IOrderApi {
  _id?: string;
  orderNo: number;
  orderStatus: EOrderStatus;
  orderCreatedDate: Date;
  orderCompleteDate: Date;
  tableNumber: number;
  orderTotal: number;
  orderItems: IFoodApi[];
  orderCurrency: ECurrency;
}
export interface IOrderDB {
  _id?: string;
  order_no: number;
  order_status: EOrderStatus;
  order_created_date: Date;
  order_complete_date: Date;
  table_number: number;
  order_total: number;
  order_items: IFoodOrder[];
  order_currency: ECurrency;
}

export interface INameId {
  name: string;
  id: number;
}

export interface IFoodOrder {
  id?: number;
  itemName: string;
  itemPhoto: string;
  itemPrice: number;
  section: INameId;
  extra: INameId;
  item_quantity: number;
}
