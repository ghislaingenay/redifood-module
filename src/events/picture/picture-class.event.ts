import { IFoodDB } from '../../interfaces';

export class PhotoCreatedEvent {
  constructor(
    public readonly item_id: IFoodDB['id'],
    public readonly photo_url: IFoodDB['item_photo'],
  ) {}
}
export class PhotoUpdatedEvent {
  constructor(
    public readonly item_id: IFoodDB['id'],
    public readonly photo_url: IFoodDB['item_photo'],
  ) {}
}
export class PhotoDeletedEvent {
  constructor(public readonly item_id: IFoodDB['id']) {}
}
