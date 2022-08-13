/* eslint-disable no-console */
import { Offers } from '../../mocks/offers';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../no-found-screen/not-found-screen';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { Reviews } from '../../mocks/reviews';
import Map from '../../components/map/map';
import OffersListNearby from '../../components/offers-list-nearby/offers-list-nearby';
import { useState } from 'react';
import { useAppSelector } from '../../types/state';

type OfferScreenProps = {
  reviews: Reviews[],
}

function OfferScreen({ reviews }: OfferScreenProps): JSX.Element {
  const filteredOffers = useAppSelector((state) => state.filteredOffers);
  const params = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const offer = filteredOffers.find((el) => el.id === params.id);

  const [selectedPoint, setSelectedPoint] = useState<Offers | undefined>(
    undefined
  );

  const onCardMousePoint = (listItemName: Offers | undefined) => {
    setSelectedPoint(listItemName);
  };

  if (offer) {
    const { price, description, rating, title, bedrooms, maxAdults, type, goods } = offer;
    return (
      <>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src="img/room.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-02.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-03.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/studio-01.jpg" alt="Photo studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src="img/apartment-01.jpg" alt="Photo studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((el, id) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={id} className="property__inside-item">
                      {el}
                    </li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src="img/avatar-angelina.jpg" width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    Angelina
                  </span>
                  <span className="property__user-status">
                    Pro
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList reviews={reviews} />
                <CommentForm></CommentForm>
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map offers={filteredOffers} selectedPoint={selectedPoint}></Map>
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListNearby offers={filteredOffers.slice(0, 3)} onCardMousePoint={onCardMousePoint}></OffersListNearby>
          </section>
        </div>
      </>
    );
  }
  return (<NotFoundScreen />);
}


export default OfferScreen;
