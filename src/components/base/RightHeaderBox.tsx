import React from 'react';
import styled from 'styled-components';

const WebHeaderRightBox = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  justify-content: right;
  .right-text {
    font-size: 16px;
    padding: 0px 8px;
  }
`;

function RightHeaderBox() {
  return (
    <WebHeaderRightBox>
      <div className="right-text">로그인</div>
      <div className="right-text">로그인</div>
      <div className="right-text">로그인</div>
    </WebHeaderRightBox>
  );
}

export default RightHeaderBox;
