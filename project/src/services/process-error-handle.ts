import { setError } from '../store/action';
import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
