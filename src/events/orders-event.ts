import { IOrderApi } from '../interfaces';

// Update foods srv
export class OrderStateEvent {
  constructor(
    public readonly orderId: IOrderApi['id'],
    public readonly orderStatus: IOrderApi['orderStatus'],
  ) {}
}

// send to payment srv
export class OrderAwaitPaymentEvent {
  constructor(public readonly order: IOrderApi) {}
}
