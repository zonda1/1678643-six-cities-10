import { useState } from 'react';
import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

export type OffersListProps = {
  offers: Offers[],
  onCardMousePoint: (listItemName: Offers) => void;
};

function PlaceCards({ offers, onCardMousePoint }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offers | undefined>(undefined);

  // const listItemHoverHandler = (event: MouseEvent<HTMLLIElement>) => {
  //   event.preventDefault();
  //   onCardMousePoint({activeCard});
  // };

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <PlaceCard key={keyValue} offer={offer} activeCard={activeCard} className='cities__card' onCardMousePoint={() => setActiveCard(offer)} />
        );
      })}
    </div >
  );
}

export default PlaceCards;

