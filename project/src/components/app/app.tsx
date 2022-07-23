import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NoFoundScreen from '../../pages/no-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Offers } from '../../mocks/offers';
import { Reviews } from '../../mocks/reviews';

type AppScreenProps = {
  offersCount: number,
  offers: Offers[],
  reviews: Reviews[],
}

function App({ offersCount, offers, reviews }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainScreen offersCount={offersCount} offers={offers} />} />
          <Route path={AppRoute.Login} element={<LoginScreen />} />
          <Route path={AppRoute.Favorites} element={<FavoritesScreen offers={offers} />} />

          <Route path={AppRoute.Room} element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <OfferScreen />
            </PrivateRoute>
          }
          />
          <Route path='*' element={<NoFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
