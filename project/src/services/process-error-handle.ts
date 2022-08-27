import { setError } from '../store/action';
import { store } from '../store';
// import { TIMEOUT_SHOW_ERROR } from '../const';
import { clearErrorAction } from '../store/api-actions';
// import { createAsyncThunk } from '@reduxjs/toolkit';


export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
