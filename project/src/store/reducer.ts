import { createReducer } from '@reduxjs/toolkit';
import { Cities, CITIES } from '../mocks/city';
import { offers, Offers } from '../mocks/offers';
import { changeCity } from './action';
import { setOffers } from './action';
import { sortFromMostExpensive, sortFromCheapest, sortFromTopRated } from './action';

const InitialState = {
  city: CITIES[0],
  offers: [] as Offers[],
  filteredOffers: [] as Offers[],
};

function filterByCity(city: Cities) {
  return offers.filter((offer) => offer.location.city === city.title);
}

export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      const { city } = action.payload;
      state.city = city;
      state.filteredOffers = filterByCity(city);
    })
    .addCase(setOffers, (state) => {
      state.offers = offers;
      state.filteredOffers = filterByCity(state.city);
    })
    .addCase(sortFromMostExpensive, (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.price - offerA.price); })
    .addCase(sortFromCheapest, (state) => { state.filteredOffers.sort((offerA, offerB) => offerA.price - offerB.price); })
    .addCase(sortFromTopRated, (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.rating - offerA.rating); });
});

