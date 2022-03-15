import Button from 'components/common/Button';
import { mediaMax } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

interface AuthGuideProps {
  isLoginPage: boolean;
}

const AuthTitle = styled.div`
  font-size: 24px;
  text-align: left;
  margin: 50px;
  ${mediaMax.small} {
    margin: 50px 15px;
    font-size: 20px;
  }
`;

const GuideBox = styled.div`
  font-size: 14px;
  text-align: left;
  margin: 0px 60px;
  ${mediaMax.small} {
    margin: 0 15px;
    font-size: 12px;
  }
`;

export const AuthButton = styled(Button)`
  margin: 50px;
  ${mediaMax.small} {
    margin: 50px 0;
  }
`;

function AuthGuide({ isLoginPage }: AuthGuideProps) {
  return (
    <>
      <AuthTitle>{isLoginPage ? '로그인' : '회원가입'}</AuthTitle>
      <GuideBox>아이디, 비밀번호, 이름, 휴대번호 입력하기 귀찮으시죠?</GuideBox>
      <GuideBox>카카오로 1초 만에 회원가입 하세요.</GuideBox>
      <AuthButton width="300px" height="40px" buttonColor="kakaoColor">
        카카오 1초 로그인/회원가입
      </AuthButton>
      <hr />
      <div>또는</div>
    </>
  );
}

export default AuthGuide;
