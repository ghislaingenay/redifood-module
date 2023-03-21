import mongoose from "mongoose";
import { ECurrency, ELanguage } from "./global.interface";

export interface ISettingsApi {
  user: mongoose.Types.ObjectId;
  currency: ECurrency; // Change to ECurrency later
  vat: ELanguage;
  language: string; // Change to ELanguage
  haveFoodDescription: boolean;
  haveFoodImage: boolean;
}

export type ISettingsBody = Omit<ISettingsApi, "user">;
