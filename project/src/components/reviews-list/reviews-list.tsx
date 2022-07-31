import { Reviews } from '../../mocks/reviews';
import OfferReviews from '../reviews/reviews';

type ReviewsListProps = {
  reviews: Reviews[],
}

export default function ReviewsList({ reviews }: ReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review, id) => {
          const keyValue = `offer-${id}`;
          return (
            <OfferReviews key={keyValue} review={review} />
          );
        })}
      </ul>
    </>
  );
}
