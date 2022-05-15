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
    phoneNumber: '',
  });
  const [registerData, setRegisterData] = useState({
    name: 'Leejaeha',
    role: 'ADMIN',
    password: '',
    email: '',
    phoneNumber: '',
    profileImg:
      'https://showppingmall-bucket.s3.ap-northeast-2.amazonaws.com/%09s%0Fs%05u%EF%BF%BD%09c%EF%BF%BD%202021-09-10%20%0Bi%12n%204.45.26.png',
  });

  // eslint-disable-next-line consistent-return
  const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserForm((prev) => ({ ...prev, [name]: value }));
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
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

  return {
    userForm,
    onChangeForm,
    errorMessage,
    onChangePasswordConfirm,
    registerData,
  };
}
