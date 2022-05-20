import { ILoginData, IResponseLogin } from 'model/auth';
import client from '.';

export const loginAPI = async (loginData: ILoginData) => {
  const response = await client.post(
    'https://affluent-closet.herokuapp.com/user/login',
    loginData,
  );
  return response.data as IResponseLogin;
};
