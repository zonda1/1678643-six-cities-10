/* eslint-disable no-console */
import { createReducer } from '@reduxjs/toolkit';
// import { c} from '../mocks/city';
// import { Offers } from '../mocks/offers';
import { Offers, CityType } from '../mocks/offers';
import { changeCity } from './action';
import { setOffers } from './action';
import { sortFromMostExpensive, sortFromCheapest, sortFromTopRated, setDataLoadedStatus } from './action';
import { AuthorizationStatus } from '../const';

const InitialState = {
  city: {
    location:
    {
      latitude: 48.85661, longitude: 2.351499, zoom: 13
    },
    name: 'Paris'
  } as CityType,
  allCities: [
    {
      location: {
        latitude: 51.225402, longitude: 6.776314, zoom: 13
      },
      name: 'Dusseldorf',
    },
    {
      location:
      {
        latitude: 48.85661, longitude: 2.351499, zoom: 13
      },
      name: 'Paris'
    },
    {
      location: { latitude: 53.550341, longitude: 10.000654, zoom: 13 },
      name: 'Hamburg'
    },
    {
      location: { latitude: 50.938361, longitude: 6.959974, zoom: 13 },
      name: 'Cologne'
    },
    {
      location: { latitude: 52.37454, longitude: 4.897976, zoom: 13 },
      name: 'Amsterdam'
    },
    {
      location: { latitude: 50.846557, longitude: 4.351697, zoom: 13 },
      name: 'Brussels'
    }
  ] as CityType[],
  allcities2: [] as CityType[],
  offers: [] as Offers[],
  filteredOffers: [] as Offers[],
  authorizationStatus: AuthorizationStatus.Unknown as AuthorizationStatus,
  isDataLoaded: false as boolean,
};

function filterByCity(dataOffers: Offers[], city: CityType) {
  return dataOffers.filter((offer) => offer.city.name === city.name);
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;


export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
      state.filteredOffers = filterByCity(state.offers, state.city);
    })
    .addCase(setOffers, (state, action) => {
      state.offers = action.payload;
      console.log(state.offers);

      // const { city } = state.offers.find((el) => el.city.name === 'Paris');
      // state.city = city;
      // console.log(city);

      state.allcities2 = [...new Set(state.offers.map((el) => el.city))];

      state.filteredOffers = filterByCity(state.offers, state.city);
      console.log(state.allcities2);
      console.log(state.filteredOffers);
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(sortFromMostExpensive, (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.price - offerA.price); })
    .addCase(sortFromCheapest, (state) => { state.filteredOffers.sort((offerA, offerB) => offerA.price - offerB.price); })
    .addCase(sortFromTopRated, (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.rating - offerA.rating); });
});

