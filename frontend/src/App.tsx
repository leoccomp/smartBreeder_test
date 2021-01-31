import React from 'react';
// import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyles from './styles/globalStyles';

import Routes from './routes';

// import { store } from './store';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Routes />
      <ToastContainer autoClose={3000} />
    </>
  );
}

export default App;