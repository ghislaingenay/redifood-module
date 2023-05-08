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
  orderCompleteDate: Date;
  tableNumber: number;
  orderTotal: number;
  orderItems: IFoodOrder[];
}

export interface IOrderDB {
  id?: number;
  order_no: number;
  order_status: EOrderStatus;
  order_created_date: Date;
  order_complete_date: Date;
  table_number: number;
  order_total: number;
  order_items: IFoodOrder[];
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
