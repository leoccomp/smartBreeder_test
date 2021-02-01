/* eslint-disable import/no-anonymous-default-export */
import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "./modules/rootReducer";
import { IUserState } from "./modules/user/types";

const persistConfig = {
  key: 'smartbreeder',
  storage,
};

export interface IState {
  user: IUserState;
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };