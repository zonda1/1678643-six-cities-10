import { useState } from 'react';
import { Offers } from '../../mocks/offers';
import PlaceCard from '../place-card/place-card';

export type OffersListProps = {
  offers: Offers[],
};

function PlaceCards({ offers }: OffersListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState({ activeCard: '' });

  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <PlaceCard key={keyValue} offer={offer} activeCard={activeOffer.activeCard} onCardMousePoint={() => setActiveOffer({ activeCard: keyValue })} />
        );
      })}
    </div >
  );
}

export default PlaceCards;

