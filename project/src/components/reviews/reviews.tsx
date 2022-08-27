import { Comments } from '../../types/reviews';
import { humanizeWholeDate } from '../../utils';

type OfferReviewsProps = {
  review: Comments,
}

export default function OfferReviews({ review }: OfferReviewsProps): JSX.Element {
  const { user: { name, avatarUrl }, rating, comment, date } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl}
            width="54" height="54" alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * 100 / 5}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{humanizeWholeDate(date)}</time>
      </div>
    </li >
  );
}
