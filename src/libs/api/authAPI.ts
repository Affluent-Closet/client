import { AxiosResponse } from 'axios';
import { getTokens } from 'libs/utils/auth';
import { ILoginRequest, ILoginResponse, IRegisterRequest } from 'model/auth';
import client from '.';

export const registerAPI = async (registerRequest: IRegisterRequest) => {
  const response = await client.post('/user', registerRequest);
  return response;
};

export const loginAPI = async (loginRequest: ILoginRequest) => {
  const response = await client.post<ILoginResponse>(
    '/user/login',
    loginRequest,
  );
  return response;
};

export const getAccessToken = (): Promise<AxiosResponse> => {
  const { accessToken, refreshToken } = getTokens();
  const header = {
    accessToken: `Bearer ${accessToken}`,
    refreshToken: `Bearer ${refreshToken}`,
  };
  return client.get('/api/v1/user/reIssuanceAccessToken', {
    headers: header,
  });
};
