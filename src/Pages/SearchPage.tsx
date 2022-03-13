import SearchField from 'components/search/SearchField';
import React from 'react';
import styled from 'styled-components';

export const SearchPageWrapper = styled.div`
  margin: 30px;
  text-align: center;
`;

function SearchPage() {
  return (
    <SearchPageWrapper>
      <SearchField />
    </SearchPageWrapper>
  );
}

export default SearchPage;
