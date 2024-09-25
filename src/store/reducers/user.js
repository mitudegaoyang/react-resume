import { getToken, isFirstLogin } from '@/utils/auth';
import * as types from '../action-types';
const initUserInfo = {
  name: '',
  role: '',
  avatar: '',
  token: isFirstLogin() ? 'admin-token' : getToken()
};
console.log(initUserInfo);
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        name: action.name,
        role: action.role,
        avatar: action.avatar
      };
    case types.USER_RESET_USER:
      return {};
    default:
      return state;
  }
}
