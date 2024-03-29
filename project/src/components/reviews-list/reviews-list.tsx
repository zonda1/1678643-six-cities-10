import { Comments } from '../../types/reviews';
import Reviews from '../reviews/reviews';

type ReviewsListProps = {
  comments: Comments[],
}

export default function ReviewsList({ comments }: ReviewsListProps) {
  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment, id) => {
          const keyValue = `offer-${id}`;
          return (
            <Reviews key={keyValue} review={comment} />
          );
        })}
      </ul>
    </>
  );
}
