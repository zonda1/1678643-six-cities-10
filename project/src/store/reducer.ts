/* eslint-disable no-console */
import { createReducer } from '@reduxjs/toolkit';
// import { c} from '../mocks/city';
// import { Offers } from '../mocks/offers';
import { Offers, CityType } from '../mocks/offers';
import { changeCity, setOffers, setError, setProfileType, setCurrentOffer, setOffersNearby } from './action';
import { sortFromMostExpensive, sortFromCheapest, sortFromTopRated, setDataLoadedStatus, setAuthorizationStatus, setOfferComments } from './action';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';
import { Comments } from '../mocks/reviews';

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
  // allcities2: [] as any,
  offers: [] as Offers[],
  filteredOffers: [] as Offers[],
  currentOffer: null as Offers | null,
  offersNearby: [] as Offers[],
  currentOfferComments: [] as Comments[],
  authorizationStatus: AuthorizationStatus.Unknown as AuthorizationStatus,
  isDataLoaded: false as boolean,
  error: null as string | null,
  profileType: null as UserData | null,
};

function filterByCity(dataOffers: Offers[], city: CityType) {
  return dataOffers.filter((offer) => offer.city.name === city.name);
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;


export const reducer = createReducer(InitialState, (builder) => {
  builder
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    })
    .addCase(setProfileType, (state, action) => {
      state.profileType = action.payload;
    })
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

      // state.allcities2 = [...new Set(state.offers.map((el) => el.isFavorite))];
      // console.log(state.allcities2);

      state.filteredOffers = filterByCity(state.offers, state.city);
      console.log(state.filteredOffers);
    })
    .addCase(setCurrentOffer, (state, action) => {
      state.currentOffer = action.payload;
    })
    .addCase(setOffersNearby, (state, action) => {
      state.offersNearby = action.payload;
    })
    .addCase(setOfferComments, (state, action) => {
      state.currentOfferComments = action.payload;
    })
    .addCase(setDataLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(setAuthorizationStatus, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(sortFromMostExpensive, (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.price - offerA.price); })
    .addCase(sortFromCheapest, (state) => { state.filteredOffers.sort((offerA, offerB) => offerA.price - offerB.price); })
    .addCase(sortFromTopRated, (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.rating - offerA.rating); });
});

