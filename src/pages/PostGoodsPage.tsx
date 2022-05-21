import { PageContainer } from 'components/common/CommonComponents';
import PostHead from 'components/common/PostHead';
import PostGoodsBox from 'components/goodspost/PostGoodsBox';
import React from 'react';

function PostGoodsPage() {
  return (
    <PageContainer>
      <PostHead titleName="등록하기" />
      <PostGoodsBox />
    </PageContainer>
  );
}

export default PostGoodsPage;
