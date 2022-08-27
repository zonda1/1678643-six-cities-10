import MainScreen from '../../pages/main-screen/main-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NoFoundScreen from '../../pages/no-found-screen/not-found-screen';
// import PrivateRoute from '../private-route/private-route';
// import { AuthorizationStatus } from '../../const';
import { Route, Routes } from 'react-router-dom';
import { AppRoute } from '../../const';
import LayoutOffer from '../layout-offer/layout-offer';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import { useAppSelector } from '../../types/state';
import { isCheckedAuth } from '../../utils';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { getIsDataLoaded } from '../../store/data-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function App(): JSX.Element {

  const isDataLoaded = useAppSelector(getIsDataLoaded);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
            <OfferScreen />
          }
          />
        </Route>
        <Route path='*' element={<NoFoundScreen />} />
      </Routes>
    </HistoryRouter >
  );
}

export default App;
