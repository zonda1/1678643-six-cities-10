import { createAction } from '@reduxjs/toolkit';
import { AuthorizationStatus } from '../const';
import { Offers, CityType } from '../mocks/offers';
import { AppRoute } from '../const';
import { UserData } from '../types/user-data';

export const changeCity = createAction<CityType>('changeCity');
export const setOffers = createAction<Offers[]>('setOffers');
export const setCurrentOffer = createAction<Offers>('setCurrentOffer');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const setAuthorizationStatus = createAction<AuthorizationStatus>('setAuthorizationStatus');
export const redirectToRoute = createAction<AppRoute>('redirectToRoute');

export const sortFromMostExpensive = createAction('sortFromMostExpensive');
export const sortFromCheapest = createAction('sortFromCheapest');
export const sortFromTopRated = createAction('sortFromTopRated');

export const setError = createAction<string | null>('setError');
export const setProfileType = createAction<UserData | null>('setProfileType');
