import { useCallback, useState } from 'react';
import { IRegisterRequest } from 'type/auth';

export default function useAuthValidation() {
  const [userForm, setUserForm] = useState<IRegisterRequest>({
    email: '',
    password: '',
    passwordConfirm: '',
    address1: '',
    address2: '',
    phoneNum: '',
  });

  const [errorMessage, setErrorMessage] = useState<string>('');

  const onChangeForm = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setUserForm({
      ...userForm,
      [e.target.name]: e.target.value,
    });
  }, []);

  const onCheckEmail = (email: string) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    // 이메일 비었는지 검사
    if (email === '') {
      setErrorMessage('이메일을 입력해주세요.');
      return false;
    }
    // 이메일 형식 검사
    if (!emailRegex.test(email)) {
      setErrorMessage('이메일 형식이 올바르지 않아요.');
      return false;
    }
    // 이메일이 존재하는지 검사
    return true;
  };

  const onCheckPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 비밀번호 비었는지 검사
    if (password === '') {
      setErrorMessage('비밀번호를 입력해주세요.');
      return false;
    }
    // 8자리 이상, 영문 숫자 특수문자인지 검사
    if (!passwordRegex.test(password)) {
      setErrorMessage('숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.');
      return false;
    }
    return true;
  };

  return { onChangeForm, errorMessage };
}
