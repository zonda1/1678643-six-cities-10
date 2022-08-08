import { createReducer } from '@reduxjs/toolkit';
import { Cities, CITIES } from '../mocks/city';
import { offers } from '../mocks/offers';
// import { changeCityToCologne, changeCityToBrussels, changeCityToAmsterdam } from './action';
import { changeCity } from './action';
import { addOffers } from './action';
import { sortFromMostExpensive, sortFromCheapest, sortFromTopRated } from './action';

const InitialState = {
  city: CITIES[0],
  offers: filterByCity(CITIES[0])
};

function filterByCity(city: Cities) {
  return offers.filter((offer) => offer.location.city === city.title);
}

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.offers = filterByCity(city);
    })
    .addCase(addOffers, (state) => { state.offers = offers; })
    .addCase(sortFromMostExpensive, (state) => { state.offers.sort((offerA, offerB) => offerB.price - offerA.price); })
    .addCase(sortFromCheapest, (state) => { state.offers.sort((offerA, offerB) => offerA.price - offerB.price); })
    .addCase(sortFromTopRated, (state) => { state.offers.sort((offerA, offerB) => offerB.rating - offerA.rating); });
});

