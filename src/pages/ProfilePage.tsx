import { PageContainer } from 'components/common/CommonComponents';
import ProfileForm from 'components/profile/ProfileForm';
import { SearchTit } from 'components/search/SearchField';
import { mediaSize } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const MyPageContainer = styled(PageContainer)`
  max-width: ${mediaSize.medium}px;
  margin: 0 auto;
`;

function ProfilePage() {
  return (
    <MyPageContainer>
      <SearchTit>Profile</SearchTit>
      <ProfileForm />
    </MyPageContainer>
  );
}

export default ProfilePage;
