import useDaumAddress from 'hooks/common/useDaumAddress';
import { registerAPI } from 'libs/api/authAPI';
import { IRegisterRequest } from 'model/auth';
import { useCallback, useState } from 'react';
import Path from 'routes/Path';
import useAuthValidation from './useAuthValidation';

export default function useAuth() {
  const { errorMessage, onFormValidation } = useAuthValidation();
  const [userForm, setUserForm] = useState<IRegisterRequest>({
    name: 'test',
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

  const onRegister = async () => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { passwordConfirm, ...registerForm } = userForm;
      await registerAPI(registerForm);
      window.location.replace(Path.LoginPage);
      // console.log('register request success');
    } catch (error: unknown) {
      // if (error instanceof Error) {
      //   if (error.message === '다른 유저와 중복된 이메일입니다.') {
      //     console.log('Network Error');
      //   }
      // }
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
      //  버튼 활성화를 위한 유효성 검사 확인
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
