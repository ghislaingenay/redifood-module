export interface IFoodApi {
  id?: number;
  itemName: string;
  itemPhoto: string;
  itemPrice: number;
  itemDescription: string;
  itemSection: number;
  itemExtra: number;
  itemQuantity: number;
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

export interface IFoodDB {
  id?: number;
  item_name: string;
  item_photo: string;
  item_price: number;
  item_description: string;
  item_section: number;
  item_extra: number;
  item_quantity: number;
}
