import PlaceCards from '../../components/place-cards/place-cards';
import Map from '../../components/map/map';
import CitiesList from '../../components/cities-list/cities-list';
import SortingOptions from '../../components/sorting-options/sorting-options';
// import { Reviews } from '../../mocks/reviews';
import { Offers } from '../../mocks/offers';
import { Cities } from '../../mocks/city';
import { useAppSelector } from '../../types/state';
import { useState } from 'react';

type OfferCountProps = {
  offersCount: number,
  // reviews: Reviews[],
  offers: Offers[],
  cities: Cities[],
}

function MainScreen({ offersCount, offers, cities }: OfferCountProps): JSX.Element {
  offersCount = useAppSelector((state) => state.offers.length);
  offers = useAppSelector((state) => state.offers);
  const [selectedPoint, setSelectedPoint] = useState<Offers | undefined>(
    undefined
  );

  const onCardMousePoint = (listItemName: Offers | undefined) => {
    setSelectedPoint(listItemName);
  };


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
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    <span className="header__favorite-count">3</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">Sign out</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList cities={cities}></CitiesList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex={0} >
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"></use>
                  </svg>
                </span>
                <SortingOptions></SortingOptions>
              </form>
              <PlaceCards offers={offers} onCardMousePoint={onCardMousePoint} />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} cities={cities} selectedPoint={selectedPoint}></Map>
              </section>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default MainScreen;
