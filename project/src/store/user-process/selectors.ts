import { AuthorizationStatus, NameSpace } from '../../const';
import { State } from '../../types/state';
import { UserData } from '../../types/user-data';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getProfileType = (state: State): UserData | null => state[NameSpace.User].profileType;

export const getError = (state: State): string | null => state[NameSpace.User].error;
