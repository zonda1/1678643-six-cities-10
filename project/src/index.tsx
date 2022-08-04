import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITIES } from './mocks/city';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';
import { Provider } from 'react-redux';
import { store } from './store';

// const Setting = {
//   OFFERS_COUNT: 6,
// };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App offersCount={offers.length} offers={offers} reviews={reviews} cities={CITIES} />
    </Provider>
  </React.StrictMode>,
);
