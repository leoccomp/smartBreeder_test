import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';

import Routes from './routes';

import { store, persistor } from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <GlobalStyles />
        <Routes />
        <ToastContainer autoClose={3000} />
      </PersistGate>
    </Provider>
  );
}

export default App;