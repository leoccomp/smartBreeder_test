import { createStore, Store } from "redux";
import { UsersState } from './modules/users/types';

import rootReducer from "./modules/rootReducer";

export interface ApplicationState {
  user: UsersState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;