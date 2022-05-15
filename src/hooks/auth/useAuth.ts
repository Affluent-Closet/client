import { useCallback, useState } from 'react';
import { IRegisterRequest } from 'model/auth';
import useAuthValidation from './useAuthValidation';

export default function useAuth() {
  const { errorMessage, onFormValidation, setErrorMessage } =
    useAuthValidation();
  const [userForm, setUserForm] = useState<IRegisterRequest>({
    email: '',
    password: '',
    passwordConfirm: '',
    address: '',
    detailAddress: '',
    phoneNum: '',
  });

  // eslint-disable-next-line consistent-return
  const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
    onFormValidation(name, value);
  }, []);

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, password: string) => {
      const { value } = e.target;
      setUserForm((prev) => ({ ...prev, passwordConfirm: value }));
      if (password !== value) {
        setErrorMessage((prev) => ({
          ...prev,
          passwordError: '비밀번호가 일치하지 않습니다.',
        }));
        return false;
      }
      setErrorMessage((prev) => ({
        ...prev,
        passwordError: '비밀번호가 일치합니다.',
      }));
      return true;
    },
    [],
  );

  return { userForm, onChangeForm, errorMessage, onChangePasswordConfirm };
}
