import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
// import { CITIES } from './mocks/city';
// import { offers } from './mocks/offers';

import { Provider } from 'react-redux';
import { store } from './store';
// import { setOffers } from './store/action';
import { checkAuthAction, fetchOffersAction } from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';


store.dispatch(checkAuthAction());
store.dispatch(fetchOffersAction());


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App />
    </Provider>
  </React.StrictMode>,
);
