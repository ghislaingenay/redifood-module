import { IFoodGetApi, IFoodSectionListWithExtra } from './foods.interface';

export enum EOrderStatus {
  CREATED = 'created',
  AWAITING_PAYMENT = 'awaiting payment',
  COMPLETE = 'finished',
  CANCELLED = 'cancelled',
}

export interface IOrderApi<T = any> {
  id?: number;
  orderNo: string;
  orderStatus: EOrderStatus;
  orderCreatedDate: Date;
  orderFinished: Date;
  orderTableNumber: number;
  orderTotal: number;
  orderItems: T; // JSON.parse to obtain IFoodOrder[]
  userId: string;
}
export interface IOrderDB {
  id?: number;
  order_no: number;
  order_status: EOrderStatus;
  order_created_date: Date;
  order_finished: Date;
  order_table_number: number;
  order_total: number;
  order_items: string; // JSON.parse to obtain IFoodOrder[]
  user_id: string;
}

export interface INameId {
  name: string;
  id: number;
}

export interface IFoodOrder {
  id?: number;
  itemQuantity: number;
  itemName: string;
}

export interface IOrderItemsDB {
  id?: number;
  order_id: number;
  user_id: string;
  food_id: number;
  order_item_quantity: number;
  order_item_name: string;
  order_item_price: number;
}
export interface IOrderItemsApi {
  id?: number;
  orderId: number;
  userId: string;
  foodId: number;
  orderItem_Quantity: number;
  orderItemName: string;
  orderItemPrice: number;
}

export type TOrderType = 'ALL' | 'PAID' | 'NOT_PAID';

export interface IGetEditOrderRes {
  order: IOrderApi;
  orderFoodItems: IFoodGetApi[];
  foodList: IFoodGetApi[];
  foodSectionExtra: IFoodSectionListWithExtra[];
}

export interface IGetOneOrder {
  currentOrder: IOrderApi<IFoodOrder[]>;
  foodList: IFoodGetApi[];
}
