import { createAction } from '@reduxjs/toolkit';
import { Cities } from '../mocks/city';
import { Offers } from '../mocks/offers';

export const changeCity = createAction<{ city: Cities }>('changeCity');
export const setOffers = createAction<Offers[]>('setOffers');
export const sortFromMostExpensive = createAction('sortFromMostExpensive');
export const sortFromCheapest = createAction('sortFromCheapest');
export const sortFromTopRated = createAction('sortFromTopRated');
