import { createAction } from '@reduxjs/toolkit';
import { Offers, CityType } from '../mocks/offers';

export const changeCity = createAction<CityType>('changeCity');
export const setOffers = createAction<Offers[]>('setOffers');
export const setDataLoadedStatus = createAction<boolean>('setDataLoadedStatus');
export const sortFromMostExpensive = createAction('sortFromMostExpensive');
export const sortFromCheapest = createAction('sortFromCheapest');
export const sortFromTopRated = createAction('sortFromTopRated');

