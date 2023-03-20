import { ECurrency, ELanguage } from "./auth.interface";

export interface ISettings {
  user?: string;
  currency: ECurrency;
  vat: number;
  language: ELanguage;
  haveFoodDescription: boolean;
  haveFoodImage: boolean;
}

export type ISettingsBody = Omit<ISettings, "user">;
