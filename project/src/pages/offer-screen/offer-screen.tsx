/* eslint-disable eqeqeq */
/* eslint-disable no-console */
import { Offers } from '../../mocks/offers';
import { useParams } from 'react-router-dom';
import NotFoundScreen from '../no-found-screen/not-found-screen';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { AuthorizationStatus } from '../../const';
// import { Comments } from '../../mocks/reviews';
import Map from '../../components/map/map';
import OffersListNearby from '../../components/offers-list-nearby/offers-list-nearby';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../types/state';
import { fetchCurrentOfferAction, fetchOfferCommentsAction, fetchOffersNearbyAction } from '../../store/api-actions';
import { setCurrentOffer } from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';

// type OfferScreenProps = {
//   reviews: Reviews[],
// }

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { currentOffer, filteredOffers, offersNearby, currentOfferComments, authorizationStatus } = useAppSelector((state) => state);
  const [isLoading, setIsLoading] = useState(false);

  const [selectedPoint, setSelectedPoint] = useState<Offers | undefined>(
    undefined
  );


  useEffect(() => {

    const fetchCurrrentOfferData = () => {
      dispatch(fetchCurrentOfferAction(Number(id)));
      dispatch(fetchOffersNearbyAction(Number(id)));
      dispatch(fetchOfferCommentsAction(Number(id)));
    };

    if (id) {
      (async () => {
        setIsLoading(true);
        try {
          await fetchCurrrentOfferData();
        } finally {
          setIsLoading(false);
        }
      }
      )();
    }
    return () => {
      dispatch(setCurrentOffer(null));
    };
  }, [dispatch, id]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  const onCardMousePoint = (listItemName: Offers | undefined) => {
    setSelectedPoint(listItemName);
  };

  if (currentOffer && offersNearby && currentOfferComments) {
    const { price, description, rating, title, bedrooms, maxAdults, type, goods, isPremium, images, host: { name, isPro, avatarUrl } } = currentOffer;

    return (
      <>
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image, index) => {
                const keyValue = `image-${index}`;
                return (
                  <div key={keyValue} className="property__image-wrapper">
                    <img className="property__image" src={image} alt="Photo studio" />
                  </div>);
              }).slice(0, 6)}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium ?
                <div className="property__mark">
                  <span>Premium</span>
                </div> : ''}
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
                  <span style={{ width: `${rating * 100 / 5}%` }}></span>
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
                  {goods.map((el, index) => {
                    const keyValue = `good-${index}`;
                    return (
                      <li key={keyValue} className="property__inside-item">
                        {el}
                      </li>);
                  })}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {name}
                  </span>
                  <span className="property__user-status">
                    {isPro ? 'Pro' : ''}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList comments={currentOfferComments} />
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm /> : ''}
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
            <OffersListNearby offers={offersNearby} onCardMousePoint={onCardMousePoint}></OffersListNearby>
          </section>
        </div>
      </>
    );
  }
  return (<NotFoundScreen />);
}


export default OfferScreen;
