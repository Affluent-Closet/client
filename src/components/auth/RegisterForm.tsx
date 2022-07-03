import Button from 'components/common/Button';
import { FlexBetween, ListHead } from 'components/common/CommonComponents';
import Input from 'components/common/Input';
import useAgreementForm from 'hooks/auth/useAgreementForm';
import useAuth from 'hooks/auth/useAuth';
import useToggle from 'hooks/common/useToggle';
import { palette } from 'libs/styles/palette';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import AddressModal from './AddressModal';
import AgreementForm from './AgreementForm';
import RegisterFormLabel from './RegisterFormLabel';

const RegisterFormWrapper = styled.form`
  sup {
    color: ${palette.mainColor};
  }
  .findBtn {
    margin: 5px;
  }
  .registerInput {
    margin: 5px 0;
  }
`;

const RegisterFormHead = styled(ListHead)`
  font-weight: 500;
`;

const ErrorBox = styled.div`
  font-size: 12px;
  color: ${palette.mainColor};
`;

function RegisterForm() {
  const {
    userForm,
    onChangeForm,
    onRegister,
    errorMessage,
    onCompletePost,
    onChangePasswordConfirm,
    isValidationTest,
  } = useAuth();
  const { isAllChecked, ...useAgreement } = useAgreementForm();
  const { email, password, passwordConfirm, address1, address2, phoneNumber } =
    userForm;
  const [isAddressModal, onToggleAddressModal] = useToggle();

  const registerBtnToggle = useMemo(() => {
    const validationTest = Object.values(isValidationTest).every(
      (item) => item,
    );
    return !(validationTest && isAllChecked);
  }, [isValidationTest, isAllChecked]);

  return (
    <RegisterFormWrapper onSubmit={onRegister}>
      <RegisterFormHead>회원가입</RegisterFormHead>
      <div>
        <RegisterFormLabel label="이메일" />
        <Input
          className="registerInput"
          width="100%"
          height="40px"
          placeholder="이메일"
          type="email"
          name="email"
          value={email}
          onChange={onChangeForm}
        />
        {errorMessage?.emailError && (
          <ErrorBox>{errorMessage.emailError}</ErrorBox>
        )}
        <RegisterFormLabel label="비밀번호" />
        <Input
          className="registerInput"
          width="100%"
          height="40px"
          placeholder="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={onChangeForm}
        />
        <Input
          className="registerInput"
          width="100%"
          height="40px"
          placeholder="비밀번호 확인"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={onChangePasswordConfirm}
        />
        {errorMessage?.passwordError && (
          <ErrorBox>{errorMessage.passwordError}</ErrorBox>
        )}
        <RegisterFormLabel label="연락처" />
        <Input
          className="registerInput"
          width="100%"
          height="40px"
          placeholder="연락처"
          type="string"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChangeForm}
        />
        {errorMessage?.phoneError && (
          <ErrorBox>{errorMessage.phoneError}</ErrorBox>
        )}
        <RegisterFormLabel label="주소" />
        <FlexBetween>
          <Input
            className="registerInput"
            width="100%"
            height="40px"
            placeholder="주소"
            name="address1"
            value={address1}
            onChange={onChangeForm}
            disabled
          />
          <Button
            className="findBtn"
            width="3rem"
            height="40px"
            onClick={onToggleAddressModal}
            type="button"
          >
            찾기
          </Button>
        </FlexBetween>
        {isAddressModal && (
          <AddressModal
            onCompletePost={onCompletePost}
            onToggleModal={onToggleAddressModal}
          />
        )}
        <Input
          className="registerInput"
          width="100%"
          height="40px"
          placeholder="상세주소"
          name="address2"
          value={address2}
          onChange={onChangeForm}
        />
      </div>
      <hr />
      <AgreementForm useAgreement={{ isAllChecked, ...useAgreement }} />
      <Button
        width="100%"
        height="40px"
        buttonColor={registerBtnToggle ? 'grayDark' : 'mainColor'}
        fontColor="white"
        hoverButtonColor={registerBtnToggle ? 'grayDark' : 'mainColor'}
        disabled={registerBtnToggle}
        type="submit"
      >
        회원가입
      </Button>
    </RegisterFormWrapper>
  );
}

export default RegisterForm;
