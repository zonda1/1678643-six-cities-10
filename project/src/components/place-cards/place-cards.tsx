import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

export type OffersListProps = {
  offers: Offers[],
  onCardMousePoint?: (listItemName: Offers | undefined) => void;
};

function PlaceCards({ offers, onCardMousePoint }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <PlaceCard key={keyValue} offer={offer} className='cities__card' onCardMousePoint={onCardMousePoint} />
        );
      })}
    </div >
  );
}

export default PlaceCards;

