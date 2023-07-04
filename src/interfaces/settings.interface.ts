import mongoose from 'mongoose';
import { ECurrency, ELanguage } from './global.interface';

export interface ISettingsApi {
  user: mongoose.Types.ObjectId;
  currency: ECurrency;
  vat: number;
  language: ELanguage;
  haveFoodImage: boolean;
}

export type ISettingsBody = Omit<ISettingsApi, 'user'>;
