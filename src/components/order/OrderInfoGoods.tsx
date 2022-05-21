import { mediaMin } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${palette.border};
  ${mediaMin.large} {
    flex-direction: row;
    padding: 20px;
  }
`;
const GoodsImg = styled.div`
  width: 100px;
  height: 130px;
  background-color: ${palette.temp};

  > div {
    cursor: pointer;
  }

  ${mediaMin.large} {
    width: 130px;
    height: 170px;
  }
`;

const GoodsDetail = styled.div`
  padding-left: 20px;

  ${mediaMin.large} {
    display: flex;
    width: 100%;
  }
  > div:nth-child(1) {
    ${mediaMin.large} {
      display: flex;
      flex-grow: 2;
      align-items: center;
    }
  }

  > div:nth-child(2) {
    margin-top: 10px;
    ${mediaMin.large} {
      display: flex;
      align-items: center;
      flex-grow: 2;
      padding-left: 20px;
    }
  }
  > div:nth-child(3) {
    margin-top: 8px;
    ${mediaMin.large} {
      display: flex;
      flex-grow: 1;
      align-items: center;
    }
  }
`;

const Name = styled.p`
  letter-spacing: -0.5px;
  font-size: 15px;
  line-height: 1.2;
  font-weight: 300;
  word-break: break-word;

  ${mediaMin.large} {
    display: block;
    line-height: 1.1;
    font-size: 16px;
    font-weight: 300;
  }

  > span {
    display: block;
    color: ${palette.grayDarker};
    font-size: 12px;
    margin-bottom: 2px;
    ${mediaMin.large} {
      margin-bottom: 5px;
      letter-spacing: -0.5px;
    }
  }
`;

const Option = styled.p`
  font-size: 13px;
  ${mediaMin.large} {
    font-size: 14px;
    margin-top: 5px;
    font-weight: 400;
    padding-left: 30px;
  }
`;

const Price = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

function OrderInfoGoods() {
  return (
    <Container>
      <GoodsImg />
      <GoodsDetail>
        <div>
          <Name>
            <span>도프제이슨</span>
            프리미엄 가죽 자켓
          </Name>
        </div>
        <div>
          <Option>옵션 : L</Option>
        </div>
        <div>
          <Price>2,023,000원</Price>
        </div>
      </GoodsDetail>
    </Container>
  );
}

export default OrderInfoGoods;
