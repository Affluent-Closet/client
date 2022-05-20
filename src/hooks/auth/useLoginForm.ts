/* eslint-disable no-console */
import useForm from 'hooks/common/useForm';
import { loginAPI } from 'libs/api/loginAPI';
import { ILoginData } from 'model/auth';

export default function useLoginForm() {
  const { form: loginData, onChangeForm } = useForm<ILoginData>({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      const data = await loginAPI(loginData);
      localStorage.setItem('token', data.jwtString);
      console.log('login request success');
    } catch (err) {
      console.log(`login request fail: ${err}`);
    } finally {
      console.log('login request end');
    }
  };
  return { onLogin, loginData, onChangeForm };
}
