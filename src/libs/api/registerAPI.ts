import { IRegisterRequest } from 'model/auth';
import client from '.';

export const registerAPI = (registerData: any) => {
  client.post('https://affluent-closet.herokuapp.com/user', registerData);
};
