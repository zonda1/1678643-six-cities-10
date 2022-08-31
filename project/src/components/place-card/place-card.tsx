/* eslint-disable no-console */
import { Offers } from '../../types/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch, /*useAppSelector*/ } from '../../types/state';
import { useState } from 'react';
import { addOfferToFavorite, deleateOfferFromFavorite } from '../../store/api-actions';
import classnames from 'classnames';
// import { getFavoriteOffers } from '../../store/data-process/selectors';

export type OfferProps = {
  offer: Offers,
  onCardMousePoint?: (offer: Offers | undefined) => void,
  className: string,
  favoriteOffersChanger?: (counter: number) => void
};

function PlaceCard({ offer, onCardMousePoint, className, favoriteOffersChanger }: OfferProps): JSX.Element {
  const { price, title, type, id, previewImage, isPremium, rating } = offer;
  // const favoriteOffers = useAppSelector(getFavoriteOffers);

  const [isPressed, setIsPressed] = useState<{ show: boolean }>({ show: false });
  const dispatch = useAppDispatch();

  const bookmarkButtonClickHandler = () => {
    if (isPressed.show === false) {
      dispatch(addOfferToFavorite(Number(id)));
    } else {
      dispatch(deleateOfferFromFavorite(Number(id)));
    }
    // favoriteOffersChanger(favoriteOffers.length);
    setIsPressed({ show: !isPressed.show });
  };

  return (
    <article className={`${className} place-card`} onMouseEnter={() => onCardMousePoint?.(offer)} onMouseLeave={() => onCardMousePoint?.(undefined)}>
      {isPremium ?
        <div className="place-card__mark">
          <span>Premium</span>
        </div> : ''}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={classnames('place-card__bookmark-button button', { 'place-card__bookmark-button--active': isPressed.show })} type="button" onClick={bookmarkButtonClickHandler}>
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 100 / 5}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default PlaceCard;
