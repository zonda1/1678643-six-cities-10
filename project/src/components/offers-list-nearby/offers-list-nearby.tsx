import { OffersListProps } from '../place-cards/place-cards';
import OfferNearby from '../offer-nearby/offer-nearby';

export default function OffersListNearby({ offers, onCardMousePoint }: OffersListProps): JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <OfferNearby key={keyValue} offer={offer} className='near-places__card' />
        );
      })}
    </div >
  );
}
