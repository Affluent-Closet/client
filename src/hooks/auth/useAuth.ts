/* eslint-disable no-console */

import useDaumAddress from 'hooks/common/useDaumAddress';
import { registerAPI } from 'libs/api/registerAPI';
import { IRequestRegister } from 'model/auth';
import { useCallback, useState } from 'react';
import useAuthValidation from './useAuthValidation';

export default function useAuth() {
  const { errorMessage, onFormValidation } = useAuthValidation();
  const [userForm, setUserForm] = useState<IRequestRegister>({
    name: '',
    role: 'USER',
    email: '',
    password: '',
    passwordConfirm: '',
    phoneNumber: '',
    address1: '',
    address2: '',
    profileImg: '',
  });
  // 유효성 검사 통과 유무 false면 에러o true면 에러x
  const [isValidationTest, setIsValidationTest] = useState({
    emailTest: false,
    passwordTest: false,
    passwordConfirmTest: false,
    phoneNumberTest: false,
  });

  const onChangeAddress = (address1: string, address2: string) => {
    setUserForm((prev) => ({
      ...prev,
      address1,
      address2,
    }));
  };

  const onCompletePost = useDaumAddress(onChangeAddress);

  const onRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordConfirm, ...registerForm } = userForm;
      await registerAPI(registerForm);
      console.log('register request success');
    } catch (error) {
      console.log(`register request fail: ${error}`);
    } finally {
      console.log('register request end');
    }
  };

  const onErrorCheck = useCallback(
    (name) => {
      switch (name) {
        case 'email':
          return setIsValidationTest({ ...isValidationTest, emailTest: true });
        case 'password':
          return setIsValidationTest({
            ...isValidationTest,
            passwordTest: true,
          });
        case 'passwordConfirm':
          return setIsValidationTest({
            ...isValidationTest,
            passwordConfirmTest: true,
          });
        case 'phoneNumber':
          return setIsValidationTest({
            ...isValidationTest,
            phoneNumberTest: true,
          });
        default:
          return false;
      }
    },
    [isValidationTest],
  );

  const onChangeForm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>, password?: string) => {
      const { name, value } = e.target;
      setUserForm((prev) => ({
        ...prev,
        [name]: value,
      }));
      if (onFormValidation(name, value, password)) {
        onErrorCheck(name);
      }
    },
    [isValidationTest],
  );

  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      onChangeForm(e, userForm.password);
    },
    [userForm.password],
  );

  return {
    userForm,
    setUserForm,
    onChangeForm,
    onRegister,
    errorMessage,
    onCompletePost,
    onChangePasswordConfirm,
    isValidationTest,
  };
}
