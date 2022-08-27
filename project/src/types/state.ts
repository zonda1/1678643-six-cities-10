import { store } from '../store';
import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { AuthorizationStatus } from '../const';
import { CityType, Offers } from './offers';
import { Comments } from '../types/reviews';
import { UserData } from './user-data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  profileType: UserData | null,
  error: string | null
}


export type FetchData = {
  city: CityType,
  allCities: CityType[],
  offers: Offers[],
  filteredOffers: Offers[],
  currentOffer: Offers | null,
  offersNearby: Offers[],
  currentOfferComments: Comments[],
  isDataLoaded: boolean
}
