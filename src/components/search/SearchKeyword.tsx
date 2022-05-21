import React from 'react';
import { FlexCenter } from 'components/common/CommonComponents';
import styled from 'styled-components';
import { palette } from 'libs/styles/palette';

const SearchKeywordStyled = styled.div`
  color: ${palette.mainColor};
  text-transform: uppercase;
`;

interface Props {
  isSearch: boolean;
  searchKeyword: string | undefined;
}

function SearchKeyword({ isSearch, searchKeyword }: Props) {
  return (
    <div>
      {isSearch ? (
        <FlexCenter>
          <SearchKeywordStyled>{searchKeyword}</SearchKeywordStyled>에 대한 검색
          결과
        </FlexCenter>
      ) : (
        <SearchKeywordStyled>{searchKeyword}</SearchKeywordStyled>
      )}
    </div>
  );
}

export default React.memo(SearchKeyword);
