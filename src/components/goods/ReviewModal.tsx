import SlideTemplete from 'components/common/SlideTemplete';
import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import transitions from 'libs/styles/transitions';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReviewGoodsInfo from './ReviewGoodsInfo';

const ReviewModalBlock = styled.div<{ isModal: boolean }>`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  ${({ isModal }) => isModal && 'display: block'};
`;

const ModalInner = styled.div`
  padding: 0 8px;
  display: block;
  position: absolute;
  width: 100%;
  max-width: 720px;
  height: 90vh;
  background-color: ${palette.backgroundColor};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  z-index: 900;
  animation: ${transitions.fadeIn} 0.4s ease-in-out;
  border-radius: 4px;
  overflow: auto;
`;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 800;
  opacity: 0.5;
`;

const WriterBox = styled.div`
  display: flex;
  margin: 12px 0px;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  margin-right: 4px;
`;

const Info = styled.div`
  font-size: 14px;
  margin-left: 12px;
  .nickName {
    font-weight: 600;
    letter-spacing: -0.33px;
  }
  .date {
    margin-top: 4px;
    line-height: 17px;
    letter-spacing: -0.33px;
    color: ${palette.temp};
  }
`;

const ReviewDetail = styled.div`
  padding: 0px 50px;
  ${mediaMax.medium} {
    padding: 0px 5px;
  }
`;

interface ReviewModalProps {
  isModal: boolean;
  onToggle: () => void;
}

function ReviewModal({ isModal, onToggle }: ReviewModalProps) {
  useEffect(() => {
    if (isModal) window.document.body.style.overflow = 'hidden';
    return () => {
      window.document.body.style.overflow = 'unset';
    };
  }, [isModal]);
  return (
    <ReviewModalBlock isModal={isModal}>
      <ModalInner>
        <WriterBox>
          <ProfileImg src="https://avatars.githubusercontent.com/u/64634992?v=4" />
          <Info>
            <div className="nickName">jiho.lee</div>
            <div className="date">3월 3일</div>
          </Info>
        </WriterBox>
        <SlideTemplete />
        <ReviewDetail>
          <ReviewGoodsInfo />
          <div>
            글 들어갈 자리입니다.하나 더 사고싶은 의향 있어요! 레이어드로 입기
            길이가 딱 좋아서 무조건 추천합니다
          </div>
        </ReviewDetail>
      </ModalInner>
      <Background onClick={onToggle} />
    </ReviewModalBlock>
  );
}

export default ReviewModal;
