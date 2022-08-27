import { createAction } from '@reduxjs/toolkit';
import { AppRoute } from '../const';

export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

// export const changeCity = createAction<CityType>('changeCity');
// export const setOffers = createAction<Offers[]>('setOffers');
// export const setCurrentOffer = createAction<Offers | null>('setCurrentOffer');
// export const setOffersNearby = createAction<Offers[]>('setOffersNearby');
// export const setOfferComments = createAction<Comments[]>('setOfferComments');
// export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
// export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');

// export const sortFromMostExpensive = createAction('sortFromMostExpensive');
// export const sortFromCheapest = createAction('sortFromCheapest');
// export const sortFromTopRated = createAction('sortFromTopRated');

// export const setError = createAction<string | null>('setError');
// export const setProfileType = createAction<UserData | null>('setProfileType');
