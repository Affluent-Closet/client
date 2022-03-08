import SearchField from 'components/search/SearchField';
import React from 'react';
import styled from 'styled-components';

const SearchPageWrapper = styled.div`
  margin: 30px;
  text-align: center;
`;
const SearchTit = styled.div`
  font-size: 16px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 3%;
`;

function SearchPage() {
  return (
    <SearchPageWrapper>
      <SearchTit>Search</SearchTit>
      <SearchField />
    </SearchPageWrapper>
  );
}

export default SearchPage;
