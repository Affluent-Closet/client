import Button from 'components/common/Button';
import {
  FlexAlignCenter,
  FlexCenter,
  ItemGrid,
} from 'components/common/CommonComponents';
import { ReviewImg } from 'components/goods/ReviewItem';
import {
  BtnBox,
  ImgBox,
  InputFileLabel,
  InputFileStyled,
  PostAns,
  PostQue,
} from 'components/goodspost/PostGoodsBox';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React, { useState } from 'react';
import styled from 'styled-components';
import RatingSection from './RatingSection';

const PostInputBox = styled(FlexAlignCenter)`
  border-bottom: 1px solid ${palette.border};
`;

const PostDetailAns = styled.textarea`
  width: 50%;
  margin: 15px 10px 15px 0;
  font-size: 12px;
  resize: none;
  ${mediaMax.medium} {
    width: 80%;
  }
  ${mediaMax.small} {
    width: 100%;
  }
`;

const ReviewGoodsImg = styled(ReviewImg)`
  margin: 15px 0;
`;

const ReviewGoodsTit = styled.div`
  margin: 0 0 15px 0;
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;
function PostReviewBox() {
  const [ratingIndex, setRatingIndex] = useState(1);
  const onSetRatingIndex = (setNumber: number) => {
    setRatingIndex(setNumber);
  };
  return (
    <>
      <PostInputBox>
        <PostQue>리뷰 상품</PostQue>
        <div>
          <ReviewGoodsImg src="https://kream-phinf.pstatic.net/MjAyMjAzMDRfMjYw/MDAxNjQ2MzU4NDYyOTY3.BeT00qB6ij4ww2CsELmJTUaM0lDe4zk19-da3Q1elp0g.twGmg6RJEq6mZyXGXUl-PjwYHSyzsFg_g3PutPLLXc8g.JPEG/p_4d7c7817e3d04a7cb7be58557ac86c6f.jpg?type=m" />
          <ReviewGoodsTit>데이브레이크 운동화</ReviewGoodsTit>
        </div>
      </PostInputBox>
      <PostInputBox>
        <PostQue>평점</PostQue>
        <RatingSection
          ratingIndex={ratingIndex}
          setRatingIndex={onSetRatingIndex}
        />
      </PostInputBox>
      <PostInputBox>
        <div>
          <PostQue>사진</PostQue>
          <InputFileLabel>
            <InputFileStyled type="file" />
            사진 업로드
          </InputFileLabel>
        </div>
        <ItemGrid>
          <ImgBox /> <ImgBox /> <ImgBox />
          <ImgBox /> <ImgBox /> <ImgBox />
        </ItemGrid>
      </PostInputBox>

      <PostInputBox>
        <PostQue>착용자 정보</PostQue>
        <FlexCenter>
          <PostAns type="number" placeholder="키 (cm)" />
          <PostAns type="number" placeholder="몸무게 (kg)" />
        </FlexCenter>
      </PostInputBox>
      <PostInputBox>
        <PostQue>내용</PostQue>
        <PostDetailAns rows={5} />
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

export default PostReviewBox;
