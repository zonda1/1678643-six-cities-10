import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

export type OffersListProps = {
  offers: Offers[],
  onCardMousePoint?: (listItemName: Offers | undefined) => void;
  onCardMouseClick?: (cardItem: Offers) => void;
};

function PlaceCards({ offers, onCardMousePoint, onCardMouseClick }: OffersListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <PlaceCard key={keyValue} offer={offer} className='cities__card' onCardMousePoint={onCardMousePoint} onCardMouseClick={onCardMouseClick} />
        );
      })}
    </div >
  );
}

export default PlaceCards;

