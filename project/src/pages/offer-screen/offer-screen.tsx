import { Offers } from '../../types/offers';
import { useParams, useNavigate } from 'react-router-dom';
import NotFoundScreen from '../no-found-screen/not-found-screen';
import CommentForm from '../../components/comment-form/comment-form';
import ReviewsList from '../../components/reviews-list/reviews-list';
import { AuthorizationStatus, AppRoute } from '../../const';
import Map from '../../components/map/map';
import OffersListNearby from '../../components/offers-list-nearby/offers-list-nearby';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../types/state';
import { addOfferToFavorite, deleateOfferFromFavorite, fetchCurrentOfferAction, fetchOfferCommentsAction, fetchOffersNearbyAction, postNewComment } from '../../store/api-actions';
import { setCurrentOffer } from '../../store/data-process/data-process';
import LoadingScreen from '../loading-screen/loading-screen';
import { getCurrentOffer, getCurrentOfferComments, getFilteredByCity, getOfersNearby } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import classnames from 'classnames';

function OfferScreen(): JSX.Element {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const currentOffer = useAppSelector(getCurrentOffer);
  const filteredOffers = useAppSelector(getFilteredByCity);
  const offersNearby = useAppSelector(getOfersNearby);
  const currentOfferComments = useAppSelector(getCurrentOfferComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const [isLoading, setIsLoading] = useState<boolean | null>(false);

  const [selectedPoint, setSelectedPoint] = useState<Offers | undefined>(
    undefined
  );

  useEffect(() => {

    const fetchCurrrentOfferData = () => Promise.all([
      dispatch(fetchCurrentOfferAction(Number(id))),
      dispatch(fetchOffersNearbyAction(Number(id))),
      dispatch(fetchOfferCommentsAction(Number(id)))]
    );

    if (id) {
      (async () => {
        setIsLoading(true);
        try {
          await fetchCurrrentOfferData();
        } finally {
          const result = await fetchCurrrentOfferData();
          if (result.every((item) => item.meta.requestStatus === 'fulfilled')) {
            setIsLoading(false);
          }
          else {
            setIsLoading(null);
          }
        }
      }
      )();
    }
    return () => {
      dispatch(setCurrentOffer(null));
    };
  }, [dispatch, id]);

  if (isLoading === true) {
    return <LoadingScreen />;
  }
  if (isLoading === null) {
    return <NotFoundScreen />;
  }

  const onCardMousePoint = (listItemName: Offers | undefined) => {
    setSelectedPoint(listItemName);
  };

  const onUserCommentHandler = (comment: string, rating: number | null) => {
    if (id) {
      dispatch(postNewComment({ id: Number(id), review: { comment, rating } }));
    }
  };

  if (currentOffer && offersNearby && currentOfferComments) {

    const bookmarkButtonClickHandler = () => {
      if (authorizationStatus !== AuthorizationStatus.Auth) {
        navigate(`/${AppRoute.Login}`);
      }
      if (currentOffer.isFavorite) {
        dispatch(deleateOfferFromFavorite(Number(id)));
      } else {
        dispatch(addOfferToFavorite(Number(id)));
      }
    };

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
                <button className={classnames('property__bookmark-button button', { 'property__bookmark-button--active': currentOffer.isFavorite })} type="button" onClick={bookmarkButtonClickHandler}>
                  <svg className="place-card__bookmark-icon" width="31" height="33">
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
                {authorizationStatus === AuthorizationStatus.Auth ? <CommentForm onUserCommentHandler={onUserCommentHandler} /> : ''}
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
  return (<LoadingScreen />);
}


export default OfferScreen;
