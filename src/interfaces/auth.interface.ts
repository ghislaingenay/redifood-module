export interface UserPayload {
  id: string;
  email: string;
  iat?: number;
}

export type TUser = UserPayload | null;

export type TEmailType = 'VALIDATE_EMAIL' | 'FORGET_PASSWORD';
