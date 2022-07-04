// import { ILoginData, IResponseLogin } from 'model/auth';
// import client from '.';

// export const loginAPI = async (loginData: ILoginData) => {
//   const response = await client.post('/user/login', loginData);
//   return response.data as IResponseLogin;
// };

import axios from 'axios';
import { SERVER_URL } from 'libs/constants';
import { ILoginRequest, ILoginResponse } from 'model/auth';

export const loginAPI = async (loginRequest: ILoginRequest) => {
  const response = await axios.post<ILoginResponse>(
    `${SERVER_URL}/user/login`,
    loginRequest,
  );
  return response;
};
