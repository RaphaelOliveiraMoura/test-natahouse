import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SocialNetworks from '~/components/SocialNetworks';

import GlobalStyles from '~/styles/global';
import Routes from '~/routes';
import history from '~/services/history';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <SocialNetworks />
      <GlobalStyles />
      <ToastContainer autoClose={3000} />
    </Router>
  );
}

export default App;
