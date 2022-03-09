import { mediaMin } from 'libs/styles/media';
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

export const ItemGrid = styled.div`
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
