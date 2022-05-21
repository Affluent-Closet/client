/* eslint-disable-line */

import { registerAPI } from 'libs/api/registerAPI';
import { IRequestRegister } from 'model/auth';
import { useCallback, useState } from 'react';
import useAuthValidation from './useAuthValidation';

export default function useAuth() {
  const { errorMessage, onFormValidation, setErrorMessage } =
    useAuthValidation();

  const [userForm, setUserForm] = useState<IRequestRegister>({
    name: 'Leejaeha',
    role: 'ADMIN',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    profileImg: '',
  });

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await registerAPI(userForm);
      const { passwordConfirm, ...registerForm } = userForm;
      console.log('register request success');
    } catch (error) {
      console.log(`register request fail: ${error}`);
    } finally {
      console.log('register request end');
    }
  };

  // eslint-disable-next-line consistent-return
  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, password?: string) => {
      const { name, value } = e.target;
      setUserForm((prev) => ({ ...prev, [name]: value }));
      setUserForm((prev) => ({
        ...prev,
        [name]: value,
      }));
      onFormValidation(name, value, password);
    },
    [],
  );

  return {
    userForm,
    onChangeForm,
    onRegister,
    errorMessage,
  };
}
