export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Main = '/',
  Login = 'login',
  Favorites = 'favorites',
  Room = 'offer'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  HOTELS = '/hotels',
  FAVORITE = '/favorite',
  COMMENTS = '/comments',
  LOGIN = '/login',
  LOGOUT = '/logout',
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}
