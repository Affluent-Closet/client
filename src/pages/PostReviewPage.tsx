import { PageContainer } from 'components/common/CommonComponents';
import React from 'react';
import PostHead from 'components/common/PostHead';
import PostReviewBox from 'components/reviewpost/PostReviewBox';

function PostReviewPage() {
  return (
    <PageContainer>
      <PostHead titleName="리뷰 등록" />
      <PostReviewBox />
    </PageContainer>
  );
}

export default PostReviewPage;
