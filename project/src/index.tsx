import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES } from './mocks/city';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';
import { setOffers } from './store/action';


store.dispatch(setOffers(offers));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App reviews={reviews} cities={CITIES} />
    </Provider>
  </React.StrictMode>,
);
