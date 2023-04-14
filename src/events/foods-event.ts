import { IFoodOrder } from '../interfaces';

export class FoodCreatedEvent {
  constructor(public readonly food: IFoodOrder) {}
}

export class FoodUpdatedEvent {
  constructor(public readonly food: IFoodOrder) {}
}
export class FoodDeletedEvent {
  constructor(public readonly item_id: IFoodOrder['foodId']) {}
}
