import React from 'react';
import { FlexCenter } from 'components/common/CommonComponents';
import styled from 'styled-components';
import { palette } from 'libs/styles/palette';

const Container = styled.div`
  .search-keyword {
    color: ${palette.mainColor};
    text-transform: uppercase;
  }
`;

interface Props {
  isSearch: boolean;
  searchKeyword: string | undefined;
}

function SearchTitle({ isSearch, searchKeyword }: Props) {
  return (
    <Container>
      {isSearch ? (
        <FlexCenter>
          <div className="search-keyword">{searchKeyword}</div>에 대한 검색 결과
        </FlexCenter>
      ) : (
        <div className="search-keyword">{searchKeyword}</div>
      )}
    </Container>
  );
}

export default React.memo(SearchTitle);
