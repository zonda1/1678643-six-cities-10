import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NoFoundScreen from '../../pages/no-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
// import { AuthorizationStatus } from '../../const';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import { Reviews } from '../../mocks/reviews';
import LayoutOffer from '../layout-offer/layout-offer';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../types/state';
import { isCheckedAuth } from '../../store/reducer';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

type AppScreenProps = {
  reviews: Reviews[],
}

function App({ reviews }: AppScreenProps): JSX.Element {

  const { isDataLoaded, authorizationStatus } = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || isDataLoaded) {
    return (
      <LoadingScreen />
    );
  }


  return (
    <HistoryRouter history={browserHistory} >
      <Routes>
        <Route path={AppRoute.Main} />
        <Route index element={<MainScreen authorizationStatus={authorizationStatus} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<FavoritesScreen />} />
        <Route path={AppRoute.Room} element={<LayoutOffer />}>
          <Route path=':id' element={
            <PrivateRoute
              authorizationStatus={authorizationStatus}
            >
              <OfferScreen reviews={reviews} />
            </PrivateRoute>
          }
          />
        </Route>
        <Route path='*' element={<NoFoundScreen />} />
      </Routes>
    </HistoryRouter >
  );
}

export default App;
