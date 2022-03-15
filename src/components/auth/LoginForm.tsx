import Button from 'components/common/Button';
import { FlexCenter, FlexColumn } from 'components/common/CommonComponents';
import { SortMenu } from 'components/search/ResultItems';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const LoginInputStyled = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid ${palette.backgroundHover};
  border-radius: 5px;
  padding: 10px;
`;

const LoginBox = styled(FlexColumn)`
  margin: 20px;
`;

const FindInfo = styled(SortMenu)`
  border: none;
  padding-top: 5px;
  width: auto;
`;

function LoginForm() {
  return (
    <>
      <LoginBox>
        <LoginInputStyled type="text" placeholder="아이디" />
        <LoginInputStyled type="password" placeholder="비밀번호" />
      </LoginBox>
      <Button
        width="300px"
        height="40px"
        buttonColor="hoverDarkColor"
        hoverButtonColor="backgroundColor"
        fontColor="white"
        hoverFontColor="hoverDarkColor"
      >
        회원 로그인
      </Button>
      <FlexCenter>
        <FindInfo>아이디찾기</FindInfo>
        <FindInfo>비밀번호 찾기</FindInfo>
      </FlexCenter>
      <FlexCenter>
        <FindInfo>이메일로 가입하기</FindInfo>
      </FlexCenter>
    </>
  );
}

export default LoginForm;
