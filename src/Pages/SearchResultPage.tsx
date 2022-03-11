import SearchField from 'components/search/SearchField';
import SearchResultItem from 'components/search/SearchResultItem';
import React from 'react';
import { SearchPageWrapper } from './SearchPage';

function SearchResultPage() {
  return (
    <SearchPageWrapper>
      <SearchField />
      <SearchResultItem />
    </SearchPageWrapper>
  );
}

export default SearchResultPage;
