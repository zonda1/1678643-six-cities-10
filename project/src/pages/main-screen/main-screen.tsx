import PlaceCards from '../../components/place-cards/place-cards';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
import { Offers } from '../../types/offers';
import { useAppSelector, useAppDispatch } from '../../types/state';
import { useState } from 'react';
import { AuthorizationStatus } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { getCity, getFavoriteOffers, getFilteredOffers } from '../../store/data-process/selectors';
import { getProfileType } from '../../store/user-process/selectors';
import MainEmpty from '../../components/main-empty/main-empty';


type MainScreenProps = {
  authorizationStatus: AuthorizationStatus,
}

function MainScreen({ authorizationStatus }: MainScreenProps): JSX.Element {
  const city = useAppSelector(getCity);
  const filteredOffers = useAppSelector(getFilteredOffers);
  const profileType = useAppSelector(getProfileType);
  const offers = useAppSelector(getFavoriteOffers);
  const [selectedPoint, setSelectedPoint] = useState<Offers | undefined>(
    undefined
  );

  const dispatch = useAppDispatch();

  const onCardMousePoint = (listItemName: Offers | undefined) => {
    setSelectedPoint(listItemName);
  };

  if (!filteredOffers.length) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {profileType && authorizationStatus === AuthorizationStatus.Auth ?
                  <>
                    <li className="header__nav-item user">
                      <Link to={AppRoute.Favorites} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{profileType.email}</span>
                        <span className="header__favorite-count">{offers.length}</span>
                      </Link>
                    </li>
                    <li className="header__nav-item">
                      <a className="header__nav-link" href="#" onClick={() => {
                        dispatch(logoutAction());
                      }}
                      >
                        <span className="header__signout">Sign out</span>
                      </a>
                    </li>
                  </>
                  :
                  <Link to={AppRoute.Login} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </ul>
            </nav>
          </div>
        </div>
      </header >

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList></CitiesList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{`${filteredOffers.length} places to stay in ${city.name}`}</b>
              <SortingOptions></SortingOptions>
              <PlaceCards offers={filteredOffers} onCardMousePoint={onCardMousePoint} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={filteredOffers} selectedPoint={selectedPoint}></Map>
              </section>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default MainScreen;
