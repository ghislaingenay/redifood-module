export enum ETopics {
  PICTURE_CREATED = 'picture:created',
  PICTURE_UPDATED = 'picture:updated',
  PICTURE_DELETED = 'picture:deleted',
}

export enum EMicroServices {
  FOOD = 'food',
  UPLOAD = 'upload',
}

export enum EGroupId {
  FOOD = 'foods-group',
  UPLOAD = 'upload-group',
}

export interface IEvent<T> {
  topic: ETopics;
  data: T;
}
