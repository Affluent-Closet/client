/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from 'components/common/Button';
import {
  FlexBetween,
  InputStyled,
  ListHead,
} from 'components/common/CommonComponents';
import useAuth from 'hooks/auth/useAuth';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

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

const TermCB = styled.input`
  width: 15px;
  height: 15px;
  margin: 5px;
`;

const ErrorBox = styled.div`
  font-size: 12px;
  color: ${palette.mainLightColor};
`;

function RegisterForm() {
  const { userForm, onChangeForm, errorMessage } = useAuth();
  const { email, password, passwordConfirm, phoneNum, address1, address2 } =
    userForm;
  return (
    <RegisterFormWrapper
      onSubmit={() => {
        // eslint-disable-next-line no-console
      }}
    >
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
          onChange={onChangeForm}
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
          name="phoneNum"
          value={phoneNum}
          onChange={onChangeForm}
        />
        {errorMessage?.phoneError && (
          <ErrorBox>{errorMessage.phoneError}</ErrorBox>
        )}
        <RegisterQue>
          주소 <sup>*</sup>
        </RegisterQue>
        <FlexBetween>
          <RegisterInput placeholder="주소" />
          <FindAddressBtn width="3rem" height="40px" type="button">
            찾기
          </FindAddressBtn>
        </FlexBetween>
        <RegisterInput placeholder="상세주소" />
      </div>
      <hr />
      <TermAllBox>
        <TermCB type="checkbox" id="cb1" />
        <label htmlFor="cb1" className="all">
          약관 모두 동의
        </label>
      </TermAllBox>
      <TermBox>
        <TermStyled>
          <TermCB type="checkbox" id="cb1" />
          <label htmlFor="cb1">
            만 14세 이상입니다 <sup>*</sup>
          </label>
        </TermStyled>
        <TermStyled>
          <TermCB type="checkbox" id="cb1" />
          <label htmlFor="cb1">
            Afflunt Closet 약관 동의 <sup>*</sup>
          </label>
        </TermStyled>
        <TermStyled>
          <TermCB type="checkbox" id="cb1" />
          <label htmlFor="cb1">
            개인정보수집 및 이용에 대한 안내 <sup>*</sup>
          </label>
        </TermStyled>
      </TermBox>
      <Button
        width="100%"
        height="40px"
        buttonColor="mainColor"
        hoverButtonColor="mainHoverColor"
        fontColor="white"
        type="submit"
      >
        회원 로그인
      </Button>
    </RegisterFormWrapper>
  );
}

export default RegisterForm;
