/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/offers';
import { Comments } from '../types/reviews';
import { State, AppDispatch } from '../types/state';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute } from './action';
import { AuthData, NewCommentData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
// import { TIMEOUT_SHOW_ERROR } from '../const';
// import { store } from '.';
// import { setError } from '../store/action';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    // setTimeout(
    //   () => store.dispatch(setError(null)),
    //   TIMEOUT_SHOW_ERROR,
    // );
  },
);

export const fetchOffersAction = createAsyncThunk<Offers[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.HOTELS);
    // dispatch(setDataLoadedStatus(true));
    // dispatch(setOffers(data));
    // dispatch(setDataLoadedStatus(false));

    return data;
  });

export const checkAuthAction = createAsyncThunk<UserData, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get(APIRoute.LOGIN);

    // dispatch(setProfileType(data));
    // try {
    //   dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    // } catch {
    //   dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    // }
    console.log(data);
    return data;
  },
);


export const loginAction = createAsyncThunk<UserData, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.LOGIN, { email, password });
    const { token } = data;
    saveToken(token);
    // dispatch(setProfileType(data));
    // dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);


export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, { dispatch, extra: api }) => {
    await api.delete(APIRoute.LOGOUT);
    dropToken();
    // dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    // dispatch(setProfileType(null));
  },
);


export const fetchCurrentOfferAction = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.HOTELS}/${id}`);
    // dispatch(setCurrentOffer(data));
    return data;
  });

export const fetchOffersNearbyAction = createAsyncThunk<Offers[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffersNearby',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(`${APIRoute.HOTELS}/${id}/nearby`);
    // dispatch(setOffersNearby(data));
    return data;
  });

export const fetchOfferCommentsAction = createAsyncThunk<Comments[], number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOfferComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Comments[]>(`${APIRoute.COMMENTS}/${id}`);
    // dispatch(setOfferComments(data));
    return data;
  });


export const postNewComment = createAsyncThunk<Comments[], NewCommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postNewComment',
  async ({ id, review: { comment, rating } }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comments[]>(`${APIRoute.COMMENTS}/${id}`, { comment, rating });
    // console.log(data);
    // dispatch(setOfferComments(data));
    return data;
  },
);

//Favorites

export const fetchFavoriteOffersAction = createAsyncThunk<Offers[], undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchFavoriteOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.FAVORITE);
    console.log(data);
    return data;
  });


export const addOfferToFavorite = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postNewFavoriteOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.post<Offers>(`${APIRoute.FAVORITE}/${id}/1`);
    // console.log(data);
    return data;
  },
);
export const deleateOfferFromFavorite = createAsyncThunk<Offers, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postDeleateFavoriteOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.post<Offers>(`${APIRoute.FAVORITE}/${id}/0`);
    return data;
  },
);
