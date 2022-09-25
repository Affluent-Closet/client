import Path from 'routes/Path';
import userStorage from './userStorage';

export function isLogin() {
  const user = userStorage.get();
  if (!user) return false;

  const { accessToken } = user;
  return !!accessToken;
}

export function logout() {
  userStorage.remove();
  window.location.replace(Path.LandingPage);
  // window.location.href = Path.LandingPage;
}

export function getTokens() {
  const user = userStorage.get();
  if (!user) return null;

  const { accessToken, refreshToken } = user;
  const tokens = {
    accessToken,
    refreshToken,
  };
  return tokens;
}
