import { createSlice } from '@reduxjs/toolkit';
import { FetchData } from '../../types/state';
import { NameSpace } from '../../const';
import { fetchOffersAction, fetchCurrentOfferAction, fetchOffersNearbyAction, fetchOfferCommentsAction, postNewComment, fetchFavoriteOffersAction } from '../api-actions';
import { CityType } from '../../types/offers';
import { filterByCity } from '../../utils';


const initialState: FetchData = {
  city: {
    location:
    {
      latitude: 48.85661, longitude: 2.351499, zoom: 13
    },
    name: 'Paris'
  },
  allCities: [],
  offers: [],
  filteredOffers: [],
  currentOffer: null,
  offersNearby: [],
  currentOfferComments: [],
  favoriteOffers: [],
  isDataLoaded: false,
};

export const fetchData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {
    changeCity: (state, action) => {
      if (state.city !== action.payload) {
        state.city = action.payload;
      }
      state.filteredOffers = filterByCity(state.offers, state.city);
    },
    setCurrentOffer: (state, action) => {
      state.currentOffer = action.payload;
    },
    sortByPopular: (state) => { state.filteredOffers = filterByCity(state.offers, state.city); },
    sortFromMostExpensive: (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.price - offerA.price); },
    sortFromCheapest: (state) => { state.filteredOffers.sort((offerA, offerB) => offerA.price - offerB.price); },
    sortFromTopRated: (state) => { state.filteredOffers.sort((offerA, offerB) => offerB.rating - offerA.rating); }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isDataLoaded = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;

        const cities = [...state.offers.reduce((map, offer) => {
          map.set(offer.city.name, offer.city);
          return map;
        }, new Map<string, CityType>()).values()];

        state.allCities = cities;
        state.filteredOffers = filterByCity(state.offers, state.city);
        state.isDataLoaded = false;
      })
      .addCase(fetchCurrentOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
      })
      .addCase(fetchOffersNearbyAction.fulfilled, (state, action) => {
        state.offersNearby = action.payload;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.currentOfferComments = action.payload;
      })
      .addCase(postNewComment.fulfilled, (state, action) => {
        state.currentOfferComments = action.payload;
      })
      .addCase(fetchFavoriteOffersAction.fulfilled, (state, action) => {
        state.favoriteOffers = action.payload;
      });
    // .addCase(deleateOfferFromFavorite.fulfilled, (state, action) => {
    //   state.favoriteOffers = action.payload;
    // });
  }
});
export const { changeCity, setCurrentOffer, sortFromCheapest, sortFromTopRated, sortFromMostExpensive, sortByPopular } = fetchData.actions;
