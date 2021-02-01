export interface IUser {
  email: string;
  password: string;
}

export interface IUserState {
  users: IUser[];
}