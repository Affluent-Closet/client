import { useCallback, useState } from 'react';

interface IAuthErrMsg {
  emailError?: string | null;
  passwordError?: string | null;
  phoneError?: string | null;
  addressError?: string | null;
}

export default function useAuthValidation() {
  const [errorMessage, setErrorMessage] = useState<IAuthErrMsg>();

  const onCheckEmail = useCallback((email: string): boolean => {
    const emailRegex =
      // eslint-disable-next-line no-useless-escape
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    // 이메일 비었는지 검사
    if (email === '') {
      setErrorMessage((prev) => ({
        ...prev,
        emailError: '이메일을 입력해주세요.',
      }));
      return false;
    }
    // 이메일 형식 검사
    if (!emailRegex.test(email)) {
      setErrorMessage((prev) => ({
        ...prev,
        emailError: '이메일 형식이 올바르지 않아요.',
      }));
      return false;
    }

    // 이메일이 존재하는지 검사
    setErrorMessage((prev) => ({
      ...prev,
      emailError: '올바른 이메일 형식입니다.',
    }));
    return true;
  }, []);

  const onCheckPassword = useCallback((password: string): boolean => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    // 비밀번호 비었는지 검사
    if (password === '') {
      setErrorMessage((prev) => ({
        ...prev,
        passwordError: '비밀번호를 입력해주세요.',
      }));
    }
    // 8자리 이상, 영문 숫자 특수문자인지 검사
    if (!passwordRegex.test(password)) {
      setErrorMessage((prev) => ({
        ...prev,
        passwordError: '숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.',
      }));
      return false;
    }
    setErrorMessage((prev) => ({
      ...prev,
      passwordError: '올바른 비밀번호 형식입니다.',
    }));
    return true;
  }, []);

  const onCheckPasswordComfirm = useCallback(
    (passwordConfirm: string, password: string) => {
      if (password !== passwordConfirm) {
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

  const onCheckPhoneNumber = useCallback((phoneNumber: string): boolean => {
    const phoneNumberRegex = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
      setErrorMessage((prev) => ({
        ...prev,
        phoneError: '-를 제외한 휴대번호 11자리를 입력해 주세요',
      }));
      return false;
    }
    setErrorMessage((prev) => ({
      ...prev,
      phoneError: '올바른 전화번호 형식입니다.',
    }));
    return true;
  }, []);

  const onFormValidation = useCallback(
    (name: string, value: string, password?: string) => {
      switch (name) {
        case 'email':
          return onCheckEmail(value);
        case 'password':
          return onCheckPassword(value);
        case 'phoneNumber':
          return onCheckPhoneNumber(value);
        case 'passwordConfirm':
          return onCheckPasswordComfirm(value, password || '');
        default:
          return false;
      }
    },
    [],
  );

  return {
    errorMessage,
    onFormValidation,
    setErrorMessage,
  };
}
