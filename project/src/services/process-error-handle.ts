import { setError } from '../store/action';
import { store } from '../store';
import { TIMEOUT_SHOW_ERROR } from '../const';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const clearErrorAction = createAsyncThunk(
  'clearError',
  () => {
    setTimeout(
      () => store.dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
