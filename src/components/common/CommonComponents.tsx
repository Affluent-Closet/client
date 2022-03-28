import { mediaMax, mediaMin } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import styled from 'styled-components';

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListHead = styled.h2`
  font-size: 18px;
  text-align: left;
  border-bottom: 2px solid #14161a;
  padding: 16px 0;
  width: 100%;
  font-weight: 600;
`;

export const ItemGrid = styled.div`
  text-align: left;
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  ${mediaMin.medium} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mediaMin.large} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  ${mediaMin.xlarge} {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const PageContainer = styled.div`
  margin: 30px;
  text-align: center;
  ${mediaMax.small} {
    margin: 5px;
  }
  ${mediaMax.xsmall} {
    margin: 0px;
  }
`;

export const InputStyled = styled.input`
  width: 300px;
  border: 1px solid ${palette.backgroundHover};
  border-radius: 5px;
  padding: 10px 0 10px 24px;
`;
export const PageLayout = styled.div`
  margin: 20px;
`;

export const OrderPageInner = styled.div`
  margin-top: 6px;
  border-top: 2px solid ${palette.mainColor};
`;
