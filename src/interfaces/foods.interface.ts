import { UserPayload } from './auth.interface';

export interface IExtraApi {
  id?: number;
  extraName: string;
  extraOrder: number;
  extraDescription?: string;
  sectionId: number;
  userId: UserPayload['id'];
}

export interface IExtraDB {
  id?: number;
  extra_name: string;
  extra_order: number;
  user_id: UserPayload['id'];
  extra_description: string;
  section_id: number;
}

export interface IFoodApi {
  id?: number;
  itemName: string;
  itemPhoto: string;
  itemPrice: number;
  userId: UserPayload['id'];
  itemDescription: string;
  sectionId: number;
  extraId: number;
  itemQuantity: number;
  itemCreated?: Date;
}

export interface IFoodDB {
  id?: number;
  item_name: string;
  item_photo: string;
  item_price: number;
  item_description: string;
  section_id: number;
  user_id: UserPayload['id'];
  extra_id: number;
  item_quantity: number;
  item_created?: Date;
}

export interface IFoodGetApi {
  id?: number;
  itemName: string;
  userId: UserPayload['id'];
  itemPhoto: string;
  itemPrice: number;
  itemDescription: string;
  itemSection: { id: number; sectionName: string };
  itemExtra: { id: number; extraName: string };
  itemQuantity: number;
  itemCreated?: Date;
}

export interface ISectionFoodApi {
  id?: number;
  userId: UserPayload['id'];
  sectionOrder: number;
  sectionName: string;
  sectionDescription?: string;
}
export interface ISectionFoodDB {
  id?: number;
  user_id: UserPayload['id'];
  section_order: number;
  section_name: string;
  section_description?: string;
}

export interface IFoodSectionList {
  id: number;
  sectionName: string;
}

export interface IFoodSectionListWithExtra extends IFoodSectionList {
  extraList: IExtraApi[];
}

export interface IGetSectionInfo {
  listing: IFoodSectionListWithExtra[];
  foods: IFoodGetApi[];
}
