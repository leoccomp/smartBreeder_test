import { Reducer } from 'redux';
import { UsersState } from './types';

const INITIAL_STATE: UsersState = {
  data: [],
};

const user: Reducer<UsersState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@users/CREATE_REQUEST': {
      const { email, password } = action.payload.data;
      return { 
        ...state, 
        data: [
          ...state.data,
          {
            email,
            password,
          }
        ]
      };
    }
    default:
      return state;
  }
};

export default user;