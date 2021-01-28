import { Users } from './types';

export function createUser(data: Users) {
  return {
    type: '@users/CREATE_REQUEST',
    payload: {
      data,
    }
  };
}
