import { PageContainer } from 'components/common/CommonComponents';
import PostHead from 'components/common/PostHead';
import PostSizeBox from 'components/goodspost/PostSizeBox';
import React from 'react';

function PostSizePage() {
  return (
    <PageContainer>
      <PostHead titleName="등록하기" />
      <PostSizeBox />
    </PageContainer>
  );
}

export default PostSizePage;
