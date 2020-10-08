import { UserActionConstant } from './user-constants';

export const setCurrentUser = user => ({
  type: UserActionConstant.SET_CURRENT_USER,
  payload: user,

}); 