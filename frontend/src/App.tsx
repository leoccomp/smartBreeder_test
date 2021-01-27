import React from 'react';
import GlobalStyles from './styles/globalStyles';
import { Provider } from "react-redux";

import store from "./store";
import Routes from './routes';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Routes />
    </Provider>
  );
}

export default App;