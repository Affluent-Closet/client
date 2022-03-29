import { PageContainer } from 'components/common/CommonComponents';
import PostGoodsBox from 'components/goodspost/PostGoodsBox';
import PostGoodsHead from 'components/goodspost/PostGoodsHead';
import React from 'react';

function PostGoodsPage() {
  return (
    <PageContainer>
      <PostGoodsHead />
      <PostGoodsBox />
    </PageContainer>
  );
}

export default PostGoodsPage;
