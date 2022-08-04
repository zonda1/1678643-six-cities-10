import PlaceCard from '../place-card/place-card';
import { OfferProps } from '../place-card/place-card';

export default function OfferNearby({ ...restProps }: OfferProps): JSX.Element {
  return (
    <PlaceCard {...restProps} />
  );
}
