/* eslint-disable no-case-declarations */
import axios from 'axios';
import { getTokens, logout } from 'libs/utils/auth';
import { SERVER_URL } from 'libs/utils/constants';
import userStorage from 'libs/utils/userStorage';

const client = axios.create({
  withCredentials: false,
});

client.defaults.baseURL = `${SERVER_URL}`;

client.interceptors.request.use(
  (config) => {
    if (!config?.headers) {
      throw new Error(
        `Expected 'config' and 'config.headers' not to be undefined`,
      );
    }
    const tokens = getTokens();

    if (!tokens) throw new Error('No tokens found');

    const { accessToken } = tokens;

    // 아래 두 줄 대신 return Object.assign 사용
    // config.headers.accessToken = `Bearer ${accessToken}`;
    // config.headers.refreshToken = `Bearer ${refreshToken}`;

    return Object.assign(config, {
      headers: {
        accessToken: `Bearer ${accessToken}`,
        // refreshToken: `Bearer ${refreshToken}`,
      },
    });
  },

  (error) => {
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const {
      config,
      response: { status },
    } = error;

    const originalRequest = config;
    // console.log(error.response);

    switch (status) {
      case 401: // Unauthorized (access token expired)
        const tokens = getTokens();
        if (!tokens) throw new Error('No tokens found');
        const { accessToken, refreshToken } = tokens;

        try {
          const { data } = await axios.get(
            `${SERVER_URL}/api/v1/user/reIssuanceAccessToken`, // access 재발급 api
            {
              headers: {
                accessToken: `Bearer ${accessToken}`,
                refreshToken: `Bearer ${refreshToken}`,
              },
            },
          );

          const user = userStorage.get();
          if (!user) throw new Error('No user found');
          const newUser = {
            ...user,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
          };
          userStorage.set(newUser);
          axios.defaults.headers.common.accessToken = `Bearer ${data.accessToken}`;
          axios.defaults.headers.common.refreshToken = `Bearer ${data.refreshToken}`;
          originalRequest.headers.accessToken = `Bearer ${data.accessToken}`;
          originalRequest.headers.refreshToken = `Bearer ${data.refreshToken}`;
          // 401로 요청 실패했던 요청 새로운 accessToken으로 재요청
          return axios(originalRequest);
        } catch (e) {
          logout();
        }
        break;

      case 409:
        throw new Error(error.response.data.message);

      case 422:
        throw new Error(error.response.data.message);

      case 500:
        throw new Error(error.response.data.message);

      default:
        throw new Error('Unknown Error');
    }
    return 1;
  },
);

export default client;
