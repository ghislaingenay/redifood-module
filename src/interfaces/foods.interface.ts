export interface IExtraApi {
  id?: number;
  extraName: string;
  extraOrder: number;
  extraDescription?: string;
  sectionId: number;
}

export interface IExtraDB {
  id?: number;
  extra_name: string;
  extra_order: number;
  extra_description: string;
  section_id: number;
}

export interface IFoodApi {
  id?: number;
  itemName: string;
  itemPhoto: string;
  itemPrice: number;
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
  extra_id: number;
  item_quantity: number;
  item_created?: Date;
}

export interface IFoodGetApi {
  id?: number;
  itemName: string;
  itemPhoto: string;
  itemPrice: number;
  itemDescription: string;
  itemSection: { id: number; sectionName: string };
  itemExtra: { id: number; extraName: string };
  itemQuantity: number;
  itemCreated?: Date;
}

export interface IFoodOrder {
  id?: number;
  itemName: string;
  itemPhoto: string;
  itemPrice: number;
  itemDescription: string;
  itemSection: string;
  itemExtra: string;
  itemQuantity: number;
}

export interface ISectionFoodApi {
  id?: number;
  sectionOrder: number;
  sectionName: string;
  sectionDescription?: string;
}
export interface ISectionFoodDB {
  id?: number;
  section_order: number;
  section_name: string;
  section_description?: string;
}
