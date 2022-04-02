import Button from 'components/common/Button';
import {
  FlexAlignCenter,
  FlexCenter,
  InputStyled,
  ItemGrid,
} from 'components/common/CommonComponents';
import { ReviewImg } from 'components/goods/ReviewItem';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import styled from 'styled-components';

const StarLabel = styled.label`
  color: ${palette.border};
`;
const StarButton = styled.input`
  display: none;
  &:checked + ${StarLabel} {
    color: coral;
  }
`;
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
  display: none;
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

const RatingSection = styled(FlexAlignCenter)`
  margin: 13px 0px;
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
  const ratingIndexes = [1, 2, 3, 4, 5];
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
        <RatingSection>
          {ratingIndexes.map((rating, index) => (
            <div className={`rating_${index}`}>
              <StarButton type="checkbox" id={`r${rating}`} name="rating" />
              <StarLabel htmlFor={`r${rating}`}>
                <AiFillStar size={35} />
              </StarLabel>
            </div>
          ))}
        </RatingSection>
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
