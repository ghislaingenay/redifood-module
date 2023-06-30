import { IPagination } from "./global.interface";
import { IOrderApi } from "./orders.interface";

export type DateOrString = Date | string;
export type TGetHistoryParams = {
  startDate?: DateOrString;
  endDate?: DateOrString;
  page: number;
  results: number;
};

export interface IGetHistoryOrders {
  meta: IPagination;
  orders: IOrderApi<string>[];
}
