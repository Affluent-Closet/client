import useToggle from 'hooks/common/useToggle';
import React from 'react';
import styled from 'styled-components';
import ReviewModal from './ReviewModal';

const ReviewItemContainer = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  cursor: pointer;
`;
const ReviewImg = styled.img`
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

function ReviewItem() {
  const [isModal, onToggleModal] = useToggle();
  return (
    <>
      <ReviewItemContainer onClick={onToggleModal}>
        <ReviewImg src="https://kream-phinf.pstatic.net/MjAyMjAzMDRfMjYw/MDAxNjQ2MzU4NDYyOTY3.BeT00qB6ij4ww2CsELmJTUaM0lDe4zk19-da3Q1elp0g.twGmg6RJEq6mZyXGXUl-PjwYHSyzsFg_g3PutPLLXc8g.JPEG/p_4d7c7817e3d04a7cb7be58557ac86c6f.jpg?type=m" />
        <div>
          <WriterBox>
            <ProfileImg src="https://avatars.githubusercontent.com/u/64634992?v=4" />
            <NickName>jiho.lee</NickName>
          </WriterBox>
          <ReviewText>글 들어갈 자리입니다</ReviewText>
        </div>
      </ReviewItemContainer>
      <ReviewModal isModal={isModal} onToggle={onToggleModal} />
    </>
  );
}

export default ReviewItem;
