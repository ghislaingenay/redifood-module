export enum EOrderStatus {
  CREATED = 'created',
  UPDATED = 'updated',
  AWAITING_PAYMENT = 'awaiting payment',
  COMPLETE = 'completed',
  CANCELLED = 'cancelled',
}

export interface IOrderApi {
  id?: number;
  orderNo: string;
  orderStatus: EOrderStatus;
  orderCreatedDate: Date;
  orderFinished: Date;
  orderTableNumber: number;
  orderTotal: number;
  orderItems: IFoodOrder[];
  userId: number;
}

export interface IOrderDB {
  id?: number;
  order_no: number;
  order_status: EOrderStatus;
  order_created_date: Date;
  order_finished: Date;
  order_table_number: number;
  order_total: number;
  order_items: IFoodOrder[];
  user_id: number;
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
  itemQuantity: number;
}

export type TOrderType = 'ALL' | 'PAID' | 'NOT_PAID';
