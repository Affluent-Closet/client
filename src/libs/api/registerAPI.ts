import { IRequestRegister } from 'model/auth';
import client from '.';

export const registerAPI = (registerData: IRequestRegister) => {
  client.post('/user', registerData);
};
