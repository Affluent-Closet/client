/* eslint-disable no-console */
import useForm from 'hooks/common/useForm';
import { loginAPI } from 'libs/api/authAPI';
import { ILoginRequest } from 'model/auth';

export default function useLoginForm() {
  const { form: loginData, onChangeForm } = useForm<ILoginRequest>({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      const data = await loginAPI(loginData);
      localStorage.setItem('token', data.jwtString);
      console.log('login request success');
    } catch (error) {
      console.log(`login request fail: ${error}`);
    } finally {
      console.log('login request end');
    }
  };
  return { onLogin, loginData, onChangeForm };
}
