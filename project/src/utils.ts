import dayjs from 'dayjs';
import { Offers, CityType } from './types/offers';
import { AuthorizationStatus } from './const';

export const humanizeWholeDate = (dueDate: string) => dayjs(dueDate).format('DD MMMM YYYY');

export function filterByCity(dataOffers: Offers[], city: CityType) {
  return dataOffers.filter((offer) => offer.city.name === city.name);
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
