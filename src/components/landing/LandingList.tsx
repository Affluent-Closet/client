import { mediaMin } from 'libs/styles/media';
import { palette } from 'libs/styles/palette';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import LandingListItem from './LandingListItem';

const LandingListContainer = styled.section`
  /* display: flex;
  justify-content: center; */
  margin: 0 auto;
  margin-top: 30px;
  max-width: 364px;

  ${mediaMin.medium} {
    max-width: 544px;
  }

  ${mediaMin.large} {
    max-width: 1024px;
  }
`;

const LandingListInner = styled.div`
  margin: 0 auto;
`;

const LandingListCategory = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  border-bottom: 1px solid ${palette.border};
  line-height: 3;
`;

const LandingGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;

  ${mediaMin.medium} {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ${mediaMin.large} {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

function LandingList({ children }: { children: ReactNode }) {
  return (
    <LandingListContainer>
      <LandingListInner>
        <LandingListCategory>
          <h2>{children}</h2>
        </LandingListCategory>
        <LandingGrid>
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
          <LandingListItem />
        </LandingGrid>
      </LandingListInner>
    </LandingListContainer>
  );
}

export default LandingList;
