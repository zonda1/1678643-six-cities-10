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
  allCities: [] as CityType[],
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

      const cities = [...state.offers.reduce((map, offer) => {
        map.set(offer.city.name, offer.city);
        return map;
      }, new Map<string, CityType>()).values()];
      state.allCities = cities;

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

