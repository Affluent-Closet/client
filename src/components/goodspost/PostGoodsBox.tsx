import Button from 'components/common/Button';
import {
  FlexAlignCenter,
  InputStyled,
  ItemGrid,
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
  height: 25px;
  width: 50%;
  margin-right: 10px;
  font-size: 12px;
  ${mediaMax.medium} {
    width: 80%;
  }
  ${mediaMax.small} {
    width: 100%;
  }
`;

const SelectedStyled = styled.select`
  width: 50%;
  height: 25px;
  border: 1px solid ${palette.border};
  border-radius: 4px;
  padding-left: 10px;
  font-size: 12px;
  ${mediaMax.medium} {
    width: 80%;
  }
  ${mediaMax.small} {
    width: 100%;
  }
`;
const BtnBox = styled.div`
  text-align: right;
  margin: 15px;
`;

const ImgBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: antiquewhite;
  margin: 10px;
`;

const InputFileStyled = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 78%;
  color: #999999;
`;

const InputFileLabel = styled.label`
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`;
const ResetInput = styled.div``;

function PostGoodsBox() {
  return (
    <>
      <PostInputBox>
        <div>
          <PostQue>썸네일</PostQue>
          <ResetInput>
            <InputFileStyled type="file" />
            <InputFileLabel>사진 올리기</InputFileLabel>
          </ResetInput>
        </div>

        <ImgBox />
      </PostInputBox>
      <PostInputBox>
        <PostQue>사진</PostQue>
        <ItemGrid>
          <ImgBox /> <ImgBox />
          <ImgBox /> <ImgBox />
          <ImgBox /> <ImgBox />
          <ImgBox /> <ImgBox />
        </ItemGrid>
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
        <PostQue>할인률</PostQue>
        <PostAns type="number" placeholder="할인률(%)" />
        <p>%</p>
      </PostInputBox>
      <PostInputBox>
        <PostQue>재고</PostQue>
        <PostAns type="number" placeholder="갯수" />
      </PostInputBox>
      <BtnBox>
        <Button
          width="100px"
          height="30px"
          buttonColor="mainColor"
          fontColor="white"
          hoverButtonColor="mainHoverColor"
        >
          등록하기
        </Button>
      </BtnBox>
    </>
  );
}

export default PostGoodsBox;