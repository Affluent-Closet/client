import { Empty } from 'assets/img';
import Button from 'components/common/Button';
import {
  FlexAlignCenter,
  InputStyled,
  ItemGrid,
} from 'components/common/CommonComponents';
import usePostGoodsForm from 'hooks/post/usePostGoodsForm';
import { categoryMenus } from 'libs/lists/NavItems';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

export const PostQue = styled(FlexAlignCenter)`
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

export const PostAns = styled(InputStyled)`
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
export const BtnBox = styled.div`
  text-align: right;
  margin: 15px;
`;

export const ImgBox = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
`;

export const InputFileStyled = styled.input`
  display: none;
`;

export const InputFileLabel = styled.label`
  display: inline-block;
  padding: 14px 20px;
  color: #fff;
  background-color: #999999;
  cursor: pointer;
`;

export const PostButton = styled(Button)`
  margin: 2px;
`;
function PostGoodsBox() {
  const {
    goodsForm,
    onThumbUpload,
    onDetailUpload,
    onChangeForm,
    onPostGoods,
    onResetForm,
  } = usePostGoodsForm();
  const { thumbnail, detail, category, discount, name, price } = goodsForm;
  return (
    <>
      <PostInputBox>
        <div>
          <PostQue>썸네일</PostQue>
          <InputFileLabel>
            <InputFileStyled
              type="file"
              name="thumb"
              onChange={onThumbUpload}
            />
            사진 업로드
          </InputFileLabel>
        </div>

        <ImgBox src={thumbnail || Empty} alt="제품 썸네일" />
      </PostInputBox>
      <PostInputBox>
        <div>
          <PostQue>사진</PostQue>
          <InputFileLabel>
            <InputFileStyled
              type="file"
              name="detail"
              onChange={onDetailUpload}
            />
            사진 업로드
          </InputFileLabel>
        </div>
        <ItemGrid>
          {detail.length !== 0 ? (
            detail.map((detailURL: string) => (
              <ImgBox key={detailURL} src={detailURL} alt="제품 썸네일" />
            ))
          ) : (
            <>
              <ImgBox src={Empty} alt="제품 썸네일" />
              <ImgBox src={Empty} alt="제품 썸네일" />
              <ImgBox src={Empty} alt="제품 썸네일" />
              <ImgBox src={Empty} alt="제품 썸네일" />
            </>
          )}
        </ItemGrid>
      </PostInputBox>
      <PostInputBox>
        <PostQue>제목</PostQue>
        <PostAns
          type="text"
          placeholder="제목"
          name="name"
          value={name}
          onChange={onChangeForm}
        />
      </PostInputBox>
      <PostInputBox>
        <PostQue>카테고리</PostQue>
        <SelectedStyled
          name="category"
          value={category}
          onChange={onChangeForm}
        >
          {categoryMenus.map((categoryMenu, index) => (
            <option key={`category_${index}`} value={categoryMenu.name}>
              {categoryMenu.name}
            </option>
          ))}
        </SelectedStyled>
      </PostInputBox>
      <PostInputBox>
        <PostQue>가격</PostQue>
        <PostAns
          type="text"
          placeholder="가격"
          name="price"
          value={price}
          onChange={onChangeForm}
        />
        <p>원</p>
      </PostInputBox>
      <PostInputBox>
        <PostQue>할인률</PostQue>
        <PostAns
          type="number"
          placeholder="할인률(%)"
          name="discount"
          value={discount}
          onChange={onChangeForm}
        />
        <p>%</p>
      </PostInputBox>

      <BtnBox>
        <PostButton
          width="100px"
          height="30px"
          buttonColor="grayDarkest"
          fontColor="white"
          hoverButtonColor="grayDark"
          onClick={onResetForm}
        >
          초기화
        </PostButton>
        <PostButton
          width="100px"
          height="30px"
          buttonColor="mainColor"
          fontColor="white"
          hoverButtonColor="mainHoverColor"
          onClick={onPostGoods}
        >
          다음으로
        </PostButton>
      </BtnBox>
    </>
  );
}

export default PostGoodsBox;

/* <PostInputBox>
<PostQue>재고</PostQue>
<PostAns type="number" placeholder="갯수" />
</PostInputBox> */
