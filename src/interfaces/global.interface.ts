export interface IGetServerSideData<T = any, K = any> {
  results?: T | null;
  message: string | any;
  params?: K;
  statusCode?: number;
}

export enum EStatusCodes {
  SUCCESS = 200,
  CREATED = 201,
  VALIDATION_NODE = 400,
  DATABASE_CONNECTION = 500,
  BAD_REQUEST = 400,
  NOT_AUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum ECurrency {
  USD = 'USD',
  EUR = 'EUR',
}

export enum ELanguage {
  ENGLISH = 'en',
  FRENCH = 'fr',
}
