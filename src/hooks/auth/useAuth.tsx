import { useCallback, useState } from 'react';
import { IRegisterRequest } from 'type/auth';
import useAuthValidation from './useAuthValidation';

export default function useAuth() {
  const { errorMessage, onFormValidation } = useAuthValidation();
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
    console.log(onFormValidation(name, value));
  }, []);

  return { userForm, onChangeForm, errorMessage };
}
