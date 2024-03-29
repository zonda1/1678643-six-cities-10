import { NameSpace } from '../../const';
import { State } from '../../types/state';
import { CityType, Offers } from '../../types/offers';
import { Comments } from '../../types/reviews';
import { filterByCity } from '../../utils';
import { createSelector } from 'reselect';

export const getCity = (state: State): CityType => state[NameSpace.Data].city;
export const getAllCities = (state: State): CityType[] => state[NameSpace.Data].allCities;

export const getOffers = (state: State): Offers[] => state[NameSpace.Data].offers;
export const getFilteredOffers = (state: State): Offers[] => state[NameSpace.Data].filteredOffers;

export const getCurrentOffer = (state: State): Offers | null => state[NameSpace.Data].currentOffer;
export const getOfersNearby = (state: State): Offers[] => state[NameSpace.Data].offersNearby;
export const getFavoriteOffers = (state: State): Offers[] => state[NameSpace.Data].favoriteOffers;

export const getCurrentOfferComments = (state: State): Comments[] => state[NameSpace.Data].currentOfferComments;
export const getIsDataLoaded = (state: State): boolean => state[NameSpace.Data].isDataLoaded;

export const getFilteredByCity = createSelector([getOffers, getCity], filterByCity);
