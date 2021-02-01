import { IUser } from './types';

export function addUser(user: IUser) {
  return {
    type: '@users/CREATE_REQUEST',
    payload: {
      user,
    }
  };
}
