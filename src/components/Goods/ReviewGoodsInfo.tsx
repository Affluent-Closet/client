import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  width: 45px;
`;
function ReviewGoodsInfo() {
  return (
    <div>
      <Image
        src="https://image.msscdn.net/images/goods_img/20220105/2292885/2292885_2_100.jpg"
        alt="이미지"
      />
    </div>
  );
}

export default ReviewGoodsInfo;
