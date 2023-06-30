import { IPagination } from "./global.interface";
import { IOrderApi } from "./orders.interface";

export type TGetHistoryParams = {
  startDate?: Date;
  endDate?: Date;
  page: number;
  results: number;
};

export interface IGetHistoryOrders {
  meta: IPagination;
  orders: IOrderApi<string>[];
}
