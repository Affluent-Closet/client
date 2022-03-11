import { NotFoundImg } from 'assets/Img';
import { PageContainer } from 'components/common/CommonComponents';
import React from 'react';
import styled from 'styled-components';

const NotFoundWraper = styled.img`
  width: 100%;
  height: 100%;
`;

function NotFoundPage() {
  return (
    <PageContainer>
      <NotFoundWraper src={NotFoundImg} alt="404notfound" />
    </PageContainer>
  );
}

export default NotFoundPage;
