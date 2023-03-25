export interface IGetServerSideData<T = any, K = any> {
  results?: T | null;
  message: string | any;
  params?: K;
  statusCode?: number;
}

export enum ECurrency {
  USD = 'USD',
  EUR = 'EUR',
}

export enum ELanguage {
  ENGLISH = 'en',
  FRENCH = 'fr',
}
