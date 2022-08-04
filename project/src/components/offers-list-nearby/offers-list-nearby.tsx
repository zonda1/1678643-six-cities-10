import { OffersListProps } from '../place-cards/place-cards';
import OfferNearby from '../offer-nearby/offer-nearby';
import { useState } from 'react';


export default function OffersListNearby({ offers }: OffersListProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState({ activeCard: '' });
  return (
    <div className="near-places__list places__list">
      {offers.map((offer, id) => {
        const keyValue = `offer-${id}`;
        return (
          <OfferNearby key={keyValue} offer={offer} activeCard={activeOffer.activeCard} className='near-places__card' onCardMousePoint={() => setActiveOffer({ activeCard: keyValue })} />
        );
      })}
    </div >
  );
}
