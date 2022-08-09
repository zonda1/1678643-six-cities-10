import { OffersListProps } from '../place-cards/place-cards';
import OfferNearby from '../offer-nearby/offer-nearby';
import { useState } from 'react';
import { Offers } from '../../mocks/offers';


export default function OffersListNearby({ offers, onCardMousePoint }: OffersListProps): JSX.Element {
  const [activeCard, setActiveCard] = useState<Offers | undefined>(undefined);
  return (
    <div className="near-places__list places__list">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <OfferNearby key={keyValue} offer={offer} activeCard={activeCard} className='near-places__card' onCardMousePoint={() => setActiveCard(offer)} />
        );
      })}
    </div >
  );
}
