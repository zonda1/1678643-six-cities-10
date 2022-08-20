/* eslint-disable no-console */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { Offers } from '../mocks/offers';
import { Comments } from '../mocks/reviews';
import { State, AppDispatch } from '../types/state';
import { APIRoute, AppRoute } from '../const';
import { redirectToRoute, setAuthorizationStatus, setCurrentOffer, setDataLoadedStatus, setOffers, setOffersNearby, setOfferComments, setProfileType } from './action';
import { AuthorizationStatus, TIMEOUT_SHOW_ERROR } from '../const';
import { AuthData, NewCommentData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { saveToken, dropToken } from '../services/token';
import { store } from '.';
import { setError } from './action';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);


export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffers',
  async (_arg, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(APIRoute.HOTELS);
    dispatch(setDataLoadedStatus(true));
    dispatch(setOffers(data));
    dispatch(setDataLoadedStatus(false));
  });

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'checkAuth',
  async (_arg, { dispatch, extra: api }) => {
    try {
      const { data } = await api.get(APIRoute.LOGIN);
      dispatch(setProfileType(data));
      dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    } catch {
      dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    }
  },
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(APIRoute.LOGIN, { email, password });
    const { token } = data;
    saveToken(token);
    dispatch(setProfileType(data));
    dispatch(setAuthorizationStatus(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
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
    dispatch(setAuthorizationStatus(AuthorizationStatus.NoAuth));
    dispatch(setProfileType(null));
  },
);


export const fetchCurrentOfferAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchCurrentOffer',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers>(`${APIRoute.HOTELS}/${id}`);
    dispatch(setCurrentOffer(data));
  });

export const fetchOffersNearbyAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOffersNearby',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Offers[]>(`${APIRoute.HOTELS}/${id}/nearby`);
    dispatch(setOffersNearby(data));
  });

export const fetchOfferCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'fetchOfferComments',
  async (id, { dispatch, extra: api }) => {
    const { data } = await api.get<Comments[]>(`${APIRoute.COMMENTS}/${id}`);
    console.log(data);
    dispatch(setOfferComments(data));
  });


export const postNewComment = createAsyncThunk<void, NewCommentData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'postNewComment',
  async ({ id, review: { comment, rating } }, { dispatch, extra: api }) => {
    const { data } = await api.post<Comments[]>(`${APIRoute.COMMENTS}/${id}`, { comment, rating });
    console.log(data);
    dispatch(setOfferComments(data));
  },
);