import {
  FlexAlignCenter,
  InputStyled,
} from 'components/common/CommonComponents';
import { categoryMenus } from 'libs/Lists/NavItems';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const PostQue = styled(FlexAlignCenter)`
  width: 120px;
  font-size: 17px;
  height: 50px;
  margin: 10px;
  ${mediaMax.medium} {
    width: 60px;
    font-size: 14px;
  }
`;

const PostInputBox = styled(FlexAlignCenter)`
  border-bottom: 1px solid ${palette.border};
`;

const PostAns = styled(InputStyled)`
  height: 30px;
  width: 50%;
  margin-right: 10px;
`;

const SelectedStyled = styled.select`
  width: 50%;
  height: 30px;
  border: 1px solid ${palette.border};
`;
function PostGoodsBox() {
  return (
    <>
      <PostInputBox>
        <PostQue>썸네일</PostQue>
      </PostInputBox>
      <PostInputBox>
        <PostQue>사진</PostQue>
      </PostInputBox>
      <PostInputBox>
        <PostQue>제목</PostQue>
        <PostAns type="text" placeholder="제목" />
      </PostInputBox>
      <PostInputBox>
        <PostQue>카테고리</PostQue>
        <SelectedStyled name="fruit">
          {categoryMenus.map((category, index) => (
            <option key={`category_${index}`} value={category.name}>
              {category.name}
            </option>
          ))}
        </SelectedStyled>
      </PostInputBox>
      <PostInputBox>
        <PostQue>가격</PostQue>
        <PostAns type="text" placeholder="가격" />
        <p>원</p>
      </PostInputBox>
      <PostInputBox>
        <PostQue>사진</PostQue>
      </PostInputBox>
      <PostInputBox>
        <PostQue>재고</PostQue>
      </PostInputBox>
    </>
  );
}

export default PostGoodsBox;
