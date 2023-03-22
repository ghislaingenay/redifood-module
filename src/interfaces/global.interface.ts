export interface IGetServerSideData<T = any, K = any> {
  results: T | null;
  message: string;
  params?: K;
}

export enum ECurrency {
  USD = 'USD',
  EUR = 'EUR',
}

export enum ELanguage {
  ENGLISH = 'en',
  FRENCH = 'fr',
}
