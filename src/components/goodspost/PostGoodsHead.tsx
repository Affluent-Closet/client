import { ListHead } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const PostGoodsHeader = styled(ListHead)`
  color: ${palette.mainColor};
  font-weight: 500;
`;

function PostGoodsHead() {
  return <PostGoodsHeader>등록하기</PostGoodsHeader>;
}

export default PostGoodsHead;
