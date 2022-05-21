import { IRegisterRequest } from 'model/auth';
import client from '.';

export const registerAPI = (registerData: IRegisterRequest) => {
  client.post('https://affluent-closet.herokuapp.com/user', registerData);
};
