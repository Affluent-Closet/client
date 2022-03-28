import Button from 'components/common/Button';
import { OrderPageInner } from 'components/common/CommonComponents';
import Input from 'components/common/Input';
import { mediaMin } from 'libs/styles/media';
import React from 'react';
import styled from 'styled-components';

const ShippingInfoSection = styled.section`
  margin: 20px 0;
`;
const ShippingInfoItem = styled.div`
  margin-top: 8px;
  ${mediaMin.large} {
    display: flex;
    flex-direction: row;
  }
`;

const ShippingInfoCategory = styled.span`
  width: 100px;
  ${mediaMin.large} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ItemInput = styled(Input)`
  margin-top: 8px;
`;

const SearchAddr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;
const ShippingInfoAdrrssWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function OrderShippingInfo() {
  return (
    <ShippingInfoSection>
      <h3>배송 정보</h3>
      <OrderPageInner>
        <ShippingInfoItem>
          <ShippingInfoCategory>
            <h4>수령인</h4>
          </ShippingInfoCategory>
          <ItemInput width="100%" height="auto" />
        </ShippingInfoItem>
        <ShippingInfoItem>
          <ShippingInfoCategory>
            <h4>연락처</h4>
          </ShippingInfoCategory>
          <ItemInput width="100%" height="auto" />
        </ShippingInfoItem>
        <ShippingInfoItem>
          <ShippingInfoCategory>
            <h4>배송지</h4>
          </ShippingInfoCategory>
          <ShippingInfoAdrrssWrapper>
            <SearchAddr>
              <ItemInput width="100%" height="auto" />
              <Button width="80px" height="30px">
                주소 찾기
              </Button>
            </SearchAddr>
            <ItemInput width="100%" height="auto" />
            <ItemInput width="100%" height="auto" />
          </ShippingInfoAdrrssWrapper>
        </ShippingInfoItem>
        <ShippingInfoItem>
          <ShippingInfoCategory>
            <h4>요청사항</h4>
          </ShippingInfoCategory>
          <ItemInput width="100%" height="auto" />
        </ShippingInfoItem>
      </OrderPageInner>
    </ShippingInfoSection>
  );
}

export default OrderShippingInfo;
