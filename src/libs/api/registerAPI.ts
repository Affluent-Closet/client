// import { IRequestRegister } from 'model/auth';
// import client from '.';

// export const registerAPI = (registerData: IRequestRegister) => {
//   client.post('/user', registerData);
// };
import axios from 'axios';
import { SERVER_URL } from 'libs/constants';
import { IRegisterRequest } from 'model/auth';

export const registerAPI = async (RegisterRequest: IRegisterRequest) => {
  const response = await axios.post(`${SERVER_URL}/user`, RegisterRequest);
  return response;
};
