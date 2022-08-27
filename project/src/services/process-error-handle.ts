import { setError } from '../store/user-process/user-process';
import { store } from '../store';
import { clearErrorAction } from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
};
