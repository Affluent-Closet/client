import useToggle from 'hooks/common/useToggle';
import { IReviewItem } from 'model/review';
import React from 'react';
import styled from 'styled-components';
import ReviewModal from './ReviewModal';

const ReviewItemContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
`;
export const ReviewImg = styled.img`
  width: 160px;
  height: 196px;
  border-radius: 10px;
  &:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }
`;

const WriterBox = styled.span`
  display: flex;
  margin-top: 8px;
`;

const ReviewText = styled.div`
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 20px;
  font-size: 14px;
  letter-spacing: -0.21px;
  max-height: 40px;
`;

const ProfileImg = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 100%;
  margin-right: 4px;
`;

const NickName = styled.div`
  line-height: 35px;
  font-size: 14px;
`;
interface ReviewItemProps {
  contents: IReviewItem;
}
function ReviewItem({ contents }: ReviewItemProps) {
  const { detail, img } = contents;
  const [isModal, onToggleModal] = useToggle();
  return (
    <>
      <ReviewItemContainer onClick={onToggleModal}>
        <ReviewImg src={img[0]} />
        <div>
          <WriterBox>
            {/* 이거는 리코일에서 받아올 예정 */}
            <ProfileImg src="https://avatars.githubusercontent.com/u/64634992?v=4" />
            <NickName>jiho.lee</NickName>
          </WriterBox>
          <ReviewText>{detail}</ReviewText>
        </div>
      </ReviewItemContainer>
      <ReviewModal
        isModal={isModal}
        onToggle={onToggleModal}
        contents={contents}
      />
    </>
  );
}

export default ReviewItem;
