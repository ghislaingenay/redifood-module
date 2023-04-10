import { ETopics, IFoodDB } from '../../interfaces';
import { Event } from '../base-consumer';

export interface IPhotoCreatedEvent extends Event {
  data: {
    item_id: IFoodDB['id'];
    photo_url: IFoodDB['item_photo'];
  };
  topic: ETopics.PICTURE_CREATED;
}

export interface IPhotoUpdatedEvent extends Event {
  data: {
    item_id: IFoodDB['id'];
    photo_url: IFoodDB['item_photo'];
  };
  topic: ETopics.PICTURE_UPDATED;
}
export interface IPhotoDeletedEvent extends Event {
  data: {
    item_id: IFoodDB['id'];
    photo_url: IFoodDB['item_photo'];
  };
  topic: ETopics.PICTURE_DELETED;
}
