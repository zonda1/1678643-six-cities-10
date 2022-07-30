import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { CITY } from './mocks/city';
import { offers } from './mocks/offers';
import { reviews } from './mocks/reviews';

const Setting = {
  OFFERS_COUNT: 6,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App offersCount={Setting.OFFERS_COUNT} offers={offers} reviews={reviews} city={CITY} />
  </React.StrictMode>,
);
