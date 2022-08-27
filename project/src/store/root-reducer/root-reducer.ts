import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchData } from '../data-process/data-process';
import { userProcess } from '../user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: fetchData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
