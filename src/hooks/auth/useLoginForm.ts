/* eslint-disable no-console */
import useForm from 'hooks/common/useForm';
import { loginAPI } from 'libs/api/authAPI';
import userStorage from 'libs/utils/userStorage';
import { ILoginRequest } from 'model/auth';
import Path from 'routes/Path';

export default function useLoginForm() {
  const { form: loginData, onChangeForm } = useForm<ILoginRequest>({
    email: '',
    password: '',
  });

  const onLogin = async () => {
    try {
      const { data } = await loginAPI(loginData);
      userStorage.set(data);
      window.location.replace(Path.LandingPage);
    } catch (error) {
      console.log(`login request fail: ${error}`);
    }
  };

  return { onLogin, loginData, onChangeForm };
}
