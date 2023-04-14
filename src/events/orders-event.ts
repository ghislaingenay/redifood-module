import { IOrderApi } from '../interfaces';

export class OrderStateEvent {
  constructor(
    public readonly orderId: IOrderApi['id'],
    public readonly orderStatus: IOrderApi['orderStatus'],
  ) {}
}
