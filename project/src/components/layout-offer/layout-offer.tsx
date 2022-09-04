import { Outlet, Link, NavLink } from 'react-router-dom';
import Logo from '../logo/logo';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../types/state';
import { logoutAction } from '../../store/api-actions';
import { getAuthorizationStatus, getProfileType } from '../../store/user-process/selectors';
import { getFavoriteOffers } from '../../store/data-process/selectors';

function LayoutOffer() {
  const dispatch = useAppDispatch();
  const profileType = useAppSelector(getProfileType);
  const offers = useAppSelector(getFavoriteOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

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
                {profileType && authorizationStatus === AuthorizationStatus.Auth ?
                  <>
                    <li className="header__nav-item user">
                      <NavLink to={`/${AppRoute.Favorites}`} className="header__nav-link header__nav-link--profile">
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__user-name user__name">{profileType.email}</span>
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
                  </>
                  :
                  <Link to={`/${AppRoute.Login}`} className="header__nav-link header__nav-link--profile">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__login">Sign in</span>
                  </Link>}
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="page__main page__main--property">
        <Outlet />
      </main>
    </div>
  );
}

export default LayoutOffer;
