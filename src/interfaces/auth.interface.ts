export interface UserPayload {
  id: string;
  email: string;
  iat?: number;
}

export type TUser = UserPayload | null;
