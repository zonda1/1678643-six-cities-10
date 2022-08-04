import { Offers } from '../../mocks/offers';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


export type OfferProps = {
  offer: Offers,
  activeCard: string,
  onCardMousePoint: () => void,
  className: string
};

function PlaceCard({ offer, activeCard, onCardMousePoint, className }: OfferProps): JSX.Element {
  const { price, placeName, id } = offer;
  const { type } = offer.features;
  return (
    <article className={`${className} place-card`} key={activeCard} onMouseEnter={() => onCardMousePoint()}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`${AppRoute.Room}/${id}`}>
          <img className="place-card__image" src="img/apartment-01.jpg" width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{placeName}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>);
}

export default PlaceCard;
