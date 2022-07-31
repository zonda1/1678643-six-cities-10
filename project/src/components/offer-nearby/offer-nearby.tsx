import PlaceCard from '../place-card/place-card';
import { OfferProps } from '../place-card/place-card';

export default function OfferNearby({ offer, ...restProps }: OfferProps): JSX.Element {
  return (
    <PlaceCard offer={offer} {...restProps} />
  );
}
