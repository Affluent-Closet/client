import { ILoginData } from 'model/auth';
import client from '.';

export const loginAPI = async (loginData: ILoginData) => {
  try {
    const response = await client.post(
      'https://affluent-closet.herokuapp.com/user/login',
      loginData,
    );
    console.log(response);
    localStorage.setItem('token', response.data.jwtString);
  } catch (err) {
    console.log(`login request fail: ${err}`);
  } finally {
    console.log('login request end');
  }
};
