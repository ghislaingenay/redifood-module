import { ECurrency, ELanguage } from "./auth.interface";

export interface ISettings {
  user: string;
  currency: ECurrency
  vat: number;
  language: ELanguage;
  haveFoodDescription: boolean;
  haveFoodImage: boolean;
}

export interface ISettingsBody extends Omit<ISettings, "user"> {
  userId: string;
}
