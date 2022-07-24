import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
// import { AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: any;
}

function PrivateRoute({ authorizationStatus, children }: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={`/${AppRoute.Login}`} />
  );
}

export default PrivateRoute;
