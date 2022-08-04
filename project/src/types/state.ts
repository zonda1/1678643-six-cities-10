import { store } from '../store';
import { useDispatch, TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
