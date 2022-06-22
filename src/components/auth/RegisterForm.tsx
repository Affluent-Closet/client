import Button from 'components/common/Button';
import CheckBox from 'components/common/CheckBox';
import {
  FlexBetween,
  InputStyled,
  ListHead,
} from 'components/common/CommonComponents';
import useAuth from 'hooks/auth/useAuth';
import useDaumAdress from 'hooks/common/useDaumAddress';
import useToggle from 'hooks/common/useToggle';
import { palette } from 'libs/styles/palette';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddressModal from './AddressModal';

const RegisterFormWrapper = styled.form`
  sup {
    color: ${palette.mainColor};
  }
`;

const RegisterFormHead = styled(ListHead)`
  font-weight: 500;
`;

const RegisterInput = styled(InputStyled)`
  width: 100%;
  margin: 5px 0;
`;

const RegisterQue = styled.div`
  margin: 15px 0px 10px 4px;
`;

const FindAddressBtn = styled(Button)`
  margin: 5px;
`;

const TermAllBox = styled.div`
  font-weight: 500;
`;

const TermStyled = styled.div`
  margin: 10px;
`;

const TermBox = styled.div`
  border: 1px solid ${palette.border};
  padding: 5px;
  margin: 20px 0;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const ErrorBox = styled.div`
  font-size: 12px;
  color: ${palette.mainColor};
`;

function RegisterForm() {
  const { userForm, onChangeForm, onRegister, errorMessage } = useAuth();
  const { email, password, passwordConfirm, address1, address2, phoneNumber } =
    userForm;

  const [isAddressModal, onToggleAddressModal] = useToggle();
  const [, onCompletPost] = useDaumAdress();

  const [, onToggleTermModal] = useToggle();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  const [registerBtnToggle, setRegisterBtnToggle] = useState(true);

  useEffect(() => {
    if (errorMessage?.emailError === '올바른 이메일 형식입니다.') {
      if (errorMessage?.passwordError === '비밀번호가 일치합니다.') {
        if (errorMessage?.phoneError === '올바른 전화번호 형식입니다.') {
          // if (((isChecked2 === isChecked3) === isChecked4) === true) {

          setRegisterBtnToggle(false);
        }
        // }
      }
    }
  }, [errorMessage]);

  // const objArr = [
  //   {
  //     isChecked: isChecked1,
  //     setIsChecked: setIsChecked1,
  //     text: '만 14세 이상입니다',
  //   },
  // ];

  const onAllCheck = () => {
    setIsChecked1(!isChecked1);
    setIsChecked2(true);
    setIsChecked3(true);
    setIsChecked4(true);
  };

  return (
    <RegisterFormWrapper onSubmit={onRegister}>
      <RegisterFormHead>회원가입</RegisterFormHead>
      <div>
        <RegisterQue>
          이메일 <sup>*</sup>
        </RegisterQue>
        <RegisterInput
          placeholder="이메일"
          type="email"
          name="email"
          value={email}
          onChange={onChangeForm}
        />
        {errorMessage?.emailError && (
          <ErrorBox>{errorMessage.emailError}</ErrorBox>
        )}
        <RegisterQue>
          비밀번호 <sup>*</sup>
        </RegisterQue>
        <RegisterInput
          placeholder="비밀번호"
          type="password"
          name="password"
          value={password}
          onChange={onChangeForm}
        />
        <RegisterInput
          placeholder="비밀번호 확인"
          type="password"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={(e) => onChangeForm(e, password)}
        />
        {errorMessage?.passwordError && (
          <ErrorBox>{errorMessage.passwordError}</ErrorBox>
        )}
        <RegisterQue>
          연락처 <sup>*</sup>
        </RegisterQue>
        <RegisterInput
          placeholder="연락처"
          type="string"
          name="phoneNumber"
          value={phoneNumber}
          onChange={onChangeForm}
        />
        {errorMessage?.phoneError && (
          <ErrorBox>{errorMessage.phoneError}</ErrorBox>
        )}
        <RegisterQue>
          주소 <sup>*</sup>
        </RegisterQue>
        <FlexBetween>
          <RegisterInput placeholder="주소" value={address1} disabled />
          <FindAddressBtn
            width="3rem"
            height="40px"
            type="button"
            onClick={onToggleAddressModal}
          >
            찾기
          </FindAddressBtn>
        </FlexBetween>
        {isAddressModal && (
          <AddressModal
            onCompletePost={onCompletPost}
            onToggleModal={onToggleAddressModal}
          />
        )}
        <RegisterInput
          placeholder="상세주소"
          name="detailAddress"
          value={address2}
          onChange={onChangeForm}
        />
      </div>
      <hr />
      <TermAllBox>
        <CheckBoxLabel>
          <CheckBox
            variant="primary"
            width="15px"
            height="15px"
            checked={isChecked1}
            onChange={onAllCheck}
          />
          약관 모두 동의
        </CheckBoxLabel>
      </TermAllBox>
      <TermBox>
        <TermStyled>
          <CheckBoxLabel>
            <CheckBox
              variant="primary"
              checked={isChecked2}
              onChange={() => setIsChecked2(!isChecked2)}
            />
            만 14세 이상입니다 <sup>*</sup>
          </CheckBoxLabel>
        </TermStyled>
        <TermStyled>
          <CheckBoxLabel>
            <CheckBox
              variant="primary"
              checked={isChecked3}
              onChange={() => setIsChecked3(!isChecked3)}
            />
            <Button onClick={onToggleTermModal}>
              Afflunt Closet 약관 동의 <sup>*</sup>
            </Button>
          </CheckBoxLabel>
        </TermStyled>
        <TermStyled>
          <CheckBoxLabel>
            <CheckBox
              variant="primary"
              checked={isChecked4}
              onChange={() => setIsChecked4(!isChecked4)}
            />
            <Button onClick={onToggleTermModal}>
              개인정보수집 및 이용에 대한 안내 <sup>*</sup>
            </Button>
          </CheckBoxLabel>
        </TermStyled>
      </TermBox>
      <Button
        width="100%"
        height="40px"
        buttonColor="mainColor"
        hoverButtonColor="mainHoverColor"
        fontColor="white"
        disabled={registerBtnToggle}
        type="submit"
      >
        회원 로그인
      </Button>
    </RegisterFormWrapper>
  );
}

export default RegisterForm;
