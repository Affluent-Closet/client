import { useCallback, useState } from 'react';
import { IRegisterRequest } from 'type/auth';
import useAuthValidation from './useAuthValidation';

export default function useAuth() {
  const { errorMessage, onFormValidation, setErrorMessage } =
    useAuthValidation();
  const [userForm, setUserForm] = useState<IRegisterRequest>({
    email: '',
    password: '',
    passwordConfirm: '',
    address1: '',
    address2: '',
    phoneNum: '',
  });

  const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
    onFormValidation(name, value);
    if (name === 'passwordConfirm') {
      if (userForm.password !== value)
        setErrorMessage((prev) => ({
          ...prev,
          passwordError: '비밀번호가 일치하지 않습니다.',
        }));
    }
  }, []);

  return { userForm, onChangeForm, errorMessage };
}
