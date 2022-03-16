import RegisterForm from 'components/auth/RegisterForm';
import { PageContainer } from 'components/common/CommonComponents';
import { mediaSize } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const RegisterPageContainer = styled(PageContainer)`
  max-width: ${mediaSize.small}px;
  width: 100%;
  margin: 0 auto;
  text-align: left;
`;

function RegisterPage() {
  return (
    <RegisterPageContainer>
      <RegisterForm />
    </RegisterPageContainer>
  );
}

export default RegisterPage;
