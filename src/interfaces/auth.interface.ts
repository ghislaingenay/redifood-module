export interface UserPayload {
  id: string;
  email: string;
  iat?: number;
}

export type TUser = UserPayload | null;

export type TEmailType = "VALIDATE_EMAIL" | "FORGET_PASSWORD";

export interface IUserRegister {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserInfo extends UserPayload {
  firstName: string;
  lastName: string;
}

export type PartialUserInfo = Partial<UserInfo>;
