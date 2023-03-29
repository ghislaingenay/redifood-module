export interface IUploadPictureDB {
  id?: number;
  item_id: number | null;
  photo_url: string;
  created_at?: Date;
  photo_actived: boolean;
}

export interface IUploadPictureApi {
  id?: number;
  itemId: number | null;
  photoUrl: string;
  createdAt?: Date;
  photoActived: boolean;
}
