import { Reviews } from '../../mocks/reviews';

type OfferReviewsProps = {
  review: Reviews,
}

export default function OfferReviews({ review }: OfferReviewsProps): JSX.Element {
  const { author, grade, feedback } = review;
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src="img/avatar-max.jpg"
            width="54" height="54" alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">
          {author}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${grade}` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {feedback}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
      </div>
    </li >
  );
}
