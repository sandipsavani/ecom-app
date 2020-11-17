import { UserActionConstant } from './user.type';

export const setCurrentUser = user => ({
  type: UserActionConstant.SET_CURRENT_USER,
  payload: user,

}); 