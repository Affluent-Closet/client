import { mediaMax } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 20px 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${palette.border};
  ${mediaMax.large} {
    padding: 10px;
  }
`;
const GoodsImg = styled.img`
  width: 100px;
  height: 130px; ;
`;
const GoodsState = styled.div`
  font-size: 16px;
  padding: 2px 0 8px 2px;
  font-weight: 600;
`;
function MyOrderListBox() {
  return (
    <Container>
      <div>
        <GoodsState>배송 완료</GoodsState>
        <GoodsImg
          alt="구매 상품 이미지"
          src="https://shop-phinf.pstatic.net/20220329_181/1648515683871o3DBb_JPEG/49651579358393744_1300314121.jpg?type=m510"
        />
      </div>
      <div>
        <div>
          <span>도프제이슨</span>
          프리미엄 가죽 자켓
        </div>
        <div>옵션 : L</div>
        <div>2,023,000원</div>
      </div>
      <div>
        <input type="button" value="배송 조회" />
        <input type="button" value="구매 확정" />
        <input type="button" value="환불 요청" />
        <input type="button" value="교환 요청" />
      </div>
    </Container>
  );
}

export default MyOrderListBox;
