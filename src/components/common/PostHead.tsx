import { ListHead } from 'components/common/CommonComponents';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const PostHeader = styled(ListHead)`
  color: ${palette.mainColor};
  font-weight: 500;
`;
interface PostHeadProps {
  titleName: string;
}

function PostHead({ titleName }: PostHeadProps) {
  return <PostHeader>{titleName}</PostHeader>;
}

export default PostHead;
