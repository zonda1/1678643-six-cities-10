import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NoFoundScreen from '../../pages/no-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { AuthorizationStatus } from '../../const';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Reviews } from '../../mocks/reviews';
import LayoutOffer from '../layout-offer/layout-offer';
import { Cities } from '../../mocks/city';

type AppScreenProps = {
  reviews: Reviews[],
  cities: Cities[],
}

function App({ reviews, cities }: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} />
        <Route index element={<MainScreen cities={cities} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
        <Route path={AppRoute.Room} element={<LayoutOffer />}>
          <Route path=':id' element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <OfferScreen reviews={reviews} cities={cities} />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path='*' element={<NoFoundScreen />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
