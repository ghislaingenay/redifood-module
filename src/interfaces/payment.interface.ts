import { UserPayload } from './auth.interface';

export enum EPaymentType {
  CASH = 'cash',
  CARD = 'card',
}

export enum EPaymentStatus {
  CANCELLED = 'cancelled',
  REJECTED = 'rejected',
  AWAITING = 'awaiting payment',
  COMPLETED = 'completed',
}

export interface IPaymentDB {
  id?: number;
  user_id: UserPayload['id'];
  order_id: number;
  payment_stripe_id?: string;
  payment_status: EPaymentStatus;
  payment_type: EPaymentType;
  payment_amount: number;
  payment_date: Date;
  payment_discount_applied: boolean;
  payment_discount_id: number;
  payment_tax_amount: number;
}
export interface IPaymentApi {
  id?: number;
  userId: UserPayload['id'];
  orderId: number;
  paymentStripeId?: string;
  paymentStatus: EPaymentStatus;
  paymentType: EPaymentType;
  paymentAmount: number;
  paymentDate: Date;
  paymentDiscountApplied: boolean;
  paymentDiscountId: number;
  paymentTaxAmount: number;
}
