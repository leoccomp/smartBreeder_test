import { Reducer } from "redux";
import { IUserState } from './types';

const INITIAL_STATE: IUserState = {
  users: []
}

const user: Reducer<IUserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case '@users/CREATE_REQUEST': {
      const { email, password } = action.payload.user;

      return {
        ...state,
        users: [
          ...state.users,
          {
            email,
            password,
          }
        ]
      };
    }
    default: {
      return state;
    }
  }
}

export default user;