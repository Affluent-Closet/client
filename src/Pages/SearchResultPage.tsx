import { PageWrapper } from 'components/common/CommonComponents';
import SearchField from 'components/search/SearchField';
import SearchResultItem from 'components/search/SearchResultItem';
import React from 'react';

function SearchResultPage() {
  return (
    <PageWrapper>
      <SearchField />
      <SearchResultItem />
    </PageWrapper>
  );
}

export default SearchResultPage;
