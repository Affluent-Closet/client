import Button from 'components/common/Button';
import { OrderPageInner } from 'components/common/CommonComponents';
import Input from 'components/common/Input';
import React from 'react';
import styled from 'styled-components';

const ShippingInfoSection = styled.section`
  margin: 20px 0;
`;
const ShippingInfoList = styled.ol``;
const ShippingInfoItem = styled.li`
  margin-top: 8px;
`;

const ItemText = styled.span``;
const ItemInput = styled(Input)`
  margin-top: 8px;
`;

const SearchAddr = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

function OrderShippingInfo() {
  return (
    <ShippingInfoSection>
      <h3>배송 정보</h3>
      <OrderPageInner>
        <ShippingInfoList>
          <ShippingInfoItem>
            <ItemText>
              <h4>수령인</h4>
            </ItemText>
            <ItemInput width="100%" height="auto" />
          </ShippingInfoItem>
          <ShippingInfoItem>
            <ItemText>
              <h4>연락처</h4>
            </ItemText>
            <ItemInput width="100%" height="auto" />
          </ShippingInfoItem>
          <ShippingInfoItem>
            <ItemText>
              <h4>배송지</h4>
            </ItemText>
            <SearchAddr>
              <ItemInput width="100%" height="auto" />
              <Button width="80px" height="30px">
                주소 찾기
              </Button>
            </SearchAddr>
            <ItemInput width="100%" height="auto" />
            <ItemInput width="100%" height="auto" />
          </ShippingInfoItem>
          <ShippingInfoItem>
            <ItemText>
              <h4>요청사항</h4>
            </ItemText>
            <ItemInput width="100%" height="auto" />
          </ShippingInfoItem>
        </ShippingInfoList>
      </OrderPageInner>
    </ShippingInfoSection>
  );
}

export default OrderShippingInfo;
