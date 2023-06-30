export enum ETopics {
  PICTURE_CREATED = 'picture:created',
  PICTURE_UPDATED = 'picture:updated',
  PICTURE_DELETED = 'picture:deleted',
  FOOD_CREATED = 'food:created',
  FOOD_UPDATED = 'food:updated',
  FOOD_DELETED = 'food:deleted',
  ORDER_CREATED = 'order:created',
  ORDER_UPDATED = 'order:updated',
  ORDER_CANCELLED = 'order:cancelled',
  ORDER_AWAITING_PAYMENT = 'order:awaiting:payment',
  ORDER_COMPLETED = 'order:completed',
  PAYMENT_CANCELLED = 'payment:cancelled',
  PAYMENT_COMPLETED = 'payment:completed',
}

export enum EMicroServices {
  FOOD = 'food',
  UPLOAD = 'upload',
  ORDER = 'order',
  PAYMENT = 'payment',
}

export enum EGroupId {
  FOOD = 'foods-group',
  UPLOAD = 'upload-group',
  ORDER = 'order-group',
  PAYMENT = 'payment-group',
}

export interface IEvent<T> {
  topic: ETopics;
  data: T;
}
