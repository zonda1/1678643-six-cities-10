import { createAction } from '@reduxjs/toolkit';
import { Cities } from '../mocks/city';

export const changeCity = createAction<{ city: Cities }>('changeCity');
export const addOffers = createAction('addOffers');
export const sortFromMostExpensive = createAction('sortFromMostExpensive');
export const sortFromCheapest = createAction('sortFromCheapest');
export const sortFromTopRated = createAction('sortFromTopRated');
