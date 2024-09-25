import Cookies from 'js-cookie';

const TokenKey = 'Token';

export function getToken() {
  return Cookies.get(TokenKey);
}

export function setToken(token) {
  return Cookies.set(TokenKey, token);
}

export function removeToken() {
  return Cookies.remove(TokenKey);
}

const FirstLoginKey = 'hasLoggedIn';

export function isFirstLogin() {
  // 假设我们用"hasLoggedIn"作为Cookie的键
  var hasLoggedIn = Cookies.get(FirstLoginKey);

  if (hasLoggedIn) {
    // 如果Cookie中存在"hasLoggedIn"，则不是第一次登录
    return false;
  } else {
    // 如果Cookie中不存在"hasLoggedIn"，则是第一次登录
    // 设置Cookie，表示已经登录过了
    Cookies.set(FirstLoginKey, 'true', 30); // 假设Cookie有效期为30天
    Cookies.set(TokenKey, 'admin-token'); // 设置默认登录状态
    return true;
  }
}
