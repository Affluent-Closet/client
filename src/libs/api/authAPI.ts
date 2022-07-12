import axios from 'axios';
import { ILoginRequest, ILoginResponse, IRegisterRequest } from 'model/auth';

export const registerAPI = async (registerRequest: IRegisterRequest) => {
  const response = await axios.post('/user', registerRequest);
  return response;
};

export const loginAPI = async (loginRequest: ILoginRequest) => {
  const response = await axios.post<ILoginResponse>(
    '/user/login',
    loginRequest,
  );
  return response;
};
