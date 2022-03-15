import AuthGuide from 'components/auth/AuthGuide';
import LoginForm from 'components/auth/LoginForm';
import { PageContainer } from 'components/common/CommonComponents';
import { mediaSize } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const LoginPageContainer = styled(PageContainer)`
  max-width: ${mediaSize.medium}px;
  width: 100%;
  margin: 0 auto;
`;

function LoginPage() {
  return (
    <LoginPageContainer>
      <AuthGuide />
      <LoginForm />
    </LoginPageContainer>
  );
}

export default LoginPage;
