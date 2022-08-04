import { createAction } from '@reduxjs/toolkit';
import { Cities } from '../mocks/city';

export const changeCity = createAction<{ city: Cities }>('changeCity');
export const addOffers = createAction('addOffers');
