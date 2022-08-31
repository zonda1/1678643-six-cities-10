import Logo from '../../components/logo/logo';
import FavoritePlaceCard from '../../components/favorites-place-card/favorites-place-card';
import { useAppDispatch, useAppSelector } from '../../types/state';
import { getFavoriteOffers } from '../../store/data-process/selectors';
import { getProfileType } from '../../store/user-process/selectors';
import { useEffect } from 'react';
import { deleateOfferFromFavorite, fetchFavoriteOffersAction, logoutAction } from '../../store/api-actions';
import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../const';


function FavoritesScreen(): JSX.Element {
  const offers = useAppSelector(getFavoriteOffers);
  const profileType = useAppSelector(getProfileType);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavoriteOffersAction());
  }, []);

  const bookmarkRemoveButtonClickHandler = (id: number) => {
    dispatch(deleateOfferFromFavorite(id));
    dispatch(fetchFavoriteOffersAction());
  };
  const cities = [...new Set(offers.map((el) => el.city.name))];
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <NavLink to={`/${AppRoute.Favorites}`} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{profileType?.email}</span>
                    <span className="header__favorite-count">{offers.length}</span>
                  </NavLink>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#" onClick={() => {
                    dispatch(logoutAction());
                  }}
                  >
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {cities.map((city, id) => {
                const keyValue = `favorites__locations-${id}`;
                return (
                  <li key={keyValue} className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <a className="locations__item-link" href="#">
                          <span>{city}</span>
                        </a>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {offers.map((offer, innerId) => {
                        if (offer.city.name === city) {
                          const innerKeyValue = `favorites__offers-${innerId}`;
                          return (
                            <FavoritePlaceCard key={innerKeyValue} offer={offer} bookmarkRemoveButtonClickHandler={bookmarkRemoveButtonClickHandler} />
                          );
                        }
                      })}
                    </div>
                  </li>);
              })}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
}

export default FavoritesScreen;
